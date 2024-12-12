// npm i react-router-dom@6.27.0 react-loader-spinner p-min-delay

import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'
import pMinDelay from 'p-min-delay'
import { DNA, Oval, Radio } from 'react-loader-spinner'

//기본 import 방식은 모두 1개의 JS 파일에 포함된다.
import { useCallback, useState } from 'react'
import A01State from './components/A01State'
import A02Currency from './components/A02Currency'
import A03Navigate from './components/A03Navigate'
import A04Navigate from './components/A04Navigate'
import A05Props from './components/A05Props'
import A06ParamsOne from './components/A06ParamsOne'
import A06ParamsTwo from './components/A06ParamsTwo'


// import A07Query from './components/A07Query'
// import A07SearchParams from './components/A07SearchParams'
// import A09NotFound from './components/A09NotFound'
// import A08ChildComp from './components/A08ChildComp'

//lazy load => 링크를 클릭하면 서버로부터 해당 파일을 받아와서 구성
//lazy load는 로드되는 시간이 걸릴 수 있음. 따라서 대체 컴포넌트(로딩바)를
//<Suspense fallback={<로딩바 컴포넌트 />}>{실질 컴포넌트}</Suspense>
const A07Query = lazy(() => pMinDelay(import('./components/A07Query'), 1000));
const A07SearchParams = lazy(() => pMinDelay(import('./components/A07SearchParams'), 1000));
const A09NotFound = lazy(() => pMinDelay(import('./components/A09NotFound'), 1000));
const A08ChildComp = lazy(() => pMinDelay(import('./components/A08ChildComp'), 1000));


// index에 BrowserRouter 세팅 필요
function App() {
  const user = { name: 'HungBu', age: 20 };
  const arr = [10, 11];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  //이 App는 리렌더링 되지 않는다. 따라서 상태변수가 필요없음(상황에 따라 필요할 수도 있음)
  const style = { color: 'orange', fontWeight: 'bold' };
  const getStyle = (props) => {
    return props.isActive ? style : undefined;
  };
  return (
    <div className="m-3">
      <h1>React Router</h1>
      {/* Link는 Style 속성을 할당하면 에러 */}
      <Link to="/">INDEX</Link> | &nbsp;
      <Link to="/state">A01</Link> | {' '}
      <Link to="/currency">A02</Link> | {' '}
      <NavLink to="/naviOne" style={getStyle}>A03</NavLink> | {' '}
      <NavLink to="/naviTwo" style={getStyle}>A04</NavLink> | {' '}
      <NavLink to="/props" style={getStyle}>A05</NavLink> | {' '}
      <NavLink to="/paramOne/1001/놀부" style={getStyle}>A06 1001</NavLink> | {' '}
      <NavLink to="/paramOne/1002/흥부" style={getStyle}>A06 1002</NavLink> | {' '}

      <NavLink to="/paramTwo/1003" style={getStyle}>A06 1003</NavLink> | {' '}
      <NavLink to="/paramTwo/1004/향단/서울" style={getStyle}>A06 1004</NavLink> | {' '}

      <NavLink to="/abc" style={getStyle}>ABC</NavLink> | {' '}

      <NavLink to="/query?no=1001&name=춘향&address=seoul#TOP" style={getStyle}>A07_1</NavLink> | {' '}
      <NavLink to="/query?no=1002&name=몽룡&address=busan#MID" style={getStyle}>A07_1</NavLink> | {' '}

      {/* HTML5의 URLSearchParams 객체 사용 방식으로 접근 */}
      <NavLink to="/search?no=1003&name=춘향&address=seoul#TOP" style={getStyle}>S 1003</NavLink> | {' '}
      <NavLink to="/search?no=1004&name=춘향&address=seoul#TOP" style={getStyle}>S 1004</NavLink> | {' '}


      <NavLink to="/child" style={getStyle} end>CHILD</NavLink> | {' '}
      <NavLink to="/child/two" style={getStyle} end>CHILD TWO</NavLink> | {' '}
      <hr />
      {/* 브라우저 주소줄에 매칭되는 패스를 기술하면 해당 element의 컴포넌트가 기술된 위치에 표시된다. */}
      <Routes>
        <Route path="/" element={<Navigate to={"/state"} replace={true} />}></Route>
        <Route path="/state" element={<A01State />}></Route>
        <Route path="/currency" element={<A02Currency />}></Route>
        <Route path="/naviOne" element={<A03Navigate />}></Route>
        <Route path="/naviTwo" element={<A04Navigate />}></Route>
        <Route path="/props" element={<A05Props name="놀부" age={20} arr={arr} user={user} onAdd={onAdd} />}></Route>

        {/* 
          패스와 변수에 대한 정의를 먼저 지정하고 Link에서 패스와 변수 값을 할당한다. 
          :이 붙지 않은 이름은 고정패스, : 붙은 패스는 고정 패스이면서 임의의 패스명(값)으로 할당
        */}
        <Route path="/paramOne/:no/:name" element={<A06ParamsOne />}></Route>
        {/* 모든 패스를 받아 처리한다. 값은 /로 이어지는 문자열 형태이다. */}
        <Route path="/paramTwo/*" element={<A06ParamsTwo />}></Route>

        {/* 
          패스가 매칭되지 않는 모든 패스를 잡아 처리한다. 기술 순서는 상관없음
          1차 등록 => /path
          2차 등록 => /path/:가변패스
          3차 등록 => /path/*
          4차 등록 => *
        */}
        {/* <Route path="*" element={<A09NotFound />}></Route> */}
        <Route path="*" element={
          <Suspense fallback={<DNA />}><A09NotFound /></Suspense>
        }></Route>

        {/* 주소줄에 패스?key=value&key=value#hash의 정보 취득 */}
        {/* <Route path="/query" element={<A07Query />}></Route>
        <Route path="/search" element={<A07SearchParams />}></Route> */}
        <Route path="/query" element={
          <Suspense fallback={<Radio />}><A07Query /></Suspense>
        }></Route>
        <Route path="/search" element={
          <Suspense fallback={<Oval />}><A07SearchParams /></Suspense>
        }></Route>

        {/* 
          하위 라우터 구성  
          1. A08ChildComp 컴포넌트에 자식 컴포넌트가 표시될 위치를 <Outlet>으로 지정
          2. path가 부모의 패스 뒤에 어떠한 패스가 오면 모두 A08ChildComp의 <Outlet> 위치에 표시된다.
          3. path가 부모의 패스의 하위가 아닌 경우는 모두 부모가 표시되는 상위 Route 위치에 표시된다.
        */}
        {/* <Route path="/child" element={<A08ChildComp />}> */}
        <Route path="/child" element={
          <Suspense fallback={<h3>Loading...</h3>}><A08ChildComp /></Suspense>
        }>
          {/* 
          상대패스는 항상 상위 패스가 붙은 형태로 정의된다.
          하위 패스가 상위 패스와 동일한 경우 path를 생략하고 index 사용 가능
          */}
          <Route index element={<h3>ONE</h3>}></Route>
          <Route path="two" element={<h3>TWO</h3>}></Route>
          <Route path="/child/three" element={<h3>THREE</h3>}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
