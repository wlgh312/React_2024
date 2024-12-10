//JSX 문법
//1. HTML 구문을 "" 또는 ''로 묶지 않는다.
//2. 반환되는 View는 반드시 단일 태그여야 한다.->ex)h1, A01을 div로 묶어야 함
//3. 종료 태그가 없는 태그는 반드시 <태그명 /> 형태로 사용해야 한다.
//4. JSX 태그의 속성은 JavaScript 속성 방식을 따른다.
import { useState } from 'react';
import A01Comp from './components/A01JSX.jsx'
import A02MakeDOM from './components/A02MakeDOM.jsx'
import A03Fragment from './components/A03Fragment.jsx';
import A04Library from './components/A04Library.jsx';

/*
function App() {
  return <div>
    <h1>Good Morning</h1>
    <br />
    <A01></A01>
  </div>
}
export default App;
*/

/*
function App() {
  //View를 보기 좋게 ()로 묶어서 1개의 값으로 취급하도록 한다.
  return (
    <div>
      <h1>Good Morning</h1>
      <br />
      <A01></A01>
    </div>
  )
}
export default App;
*/

/*
const elem = (
  <div>
    <h1>Good Morning</h1>
    <br />
    <A01></A01>
  </div>
);

function App() {
  return elem;
}
export default App;
*/


//전체 View를 통합 관리하는 컨테이너 컴포넌트 역할을 한다.
let name = '놀부';
const age = 20;
const check = true;
const arr = [10, 11];
const user = { name: 'A', age: 30 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

const changeName = () => name = '흥부';

const makeDOM = () => {
  return (
    <div>
      <h5>makeDOM 함수</h5>
      <p>
        함수의 이름 시작을  소문자로 시작했음..
      </p>
    </div>
  )
}

const MakeDOM = () => {
  return (
    <div>
      <h5>MakeDOM 함수</h5>
      <p>
        함수의 이름 시작을  대문자로 시작했음..
      </p>
    </div>
  )
}

function App() {
  //상태변수 - 값이 변경되면 즉시 변경된 값으로 화면을 갱신(리렌더링)
  const [num, setNumber] = useState(10);//getter, setter
  return (
    <div className="m-3">
      <h3>Chap03 JSX</h3>
      <p>
        JSX에서는 undefined, null, boolean 값은 표시되지 않는다.
      </p>
      <div>
        Namne: {name}<br />
        Age: {age}<br />
        Num: {num}<br />
        Check: {check ? '동의' : '동의 안함'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2] || 0}<br />
        Object: {user.name} / {user.age} / {name.address || 'Seoul'}<br />
        Function: {onAdd(10, 20)}<br />

        makeDOM: {makeDOM()}
      </div>
      <div className="mp-3">
        {/* 상태변수가 아니라 리액트는 변수값이 변경되도 아무짓도 하지 않음 */}
        <button onClick={changeName}>NAME</button>
        <button onClick={() => setNumber(20)}>NUM</button>
      </div>
      <MakeDOM></MakeDOM>
      {/* 부모가 자식에게 사용할 값을 전달 */}
      <A02MakeDOM title="ONE" age={age}></A02MakeDOM>
      <A02MakeDOM title="TWO"></A02MakeDOM>
      <A01Comp></A01Comp>
      <A03Fragment></A03Fragment>
      <A04Library></A04Library>
    </div>
  )
}

export default App
