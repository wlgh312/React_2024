//프로젝트 전의 전역 설정을 정의한다.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//이 프로젝트에서 전체에서 사용할 CSS 파일 로드
//node_modules 폴더에 있는 라이브러리는 node_modules는 생략한 이름으로 참조
import 'bootstrap/dist/css/bootstrap.css';
//import './index.css'

//함수가 JSX(JavaScript XML)를 이용한 View를 리턴하는 경우 첫문자를 대문자로 정의하면
//사용자 정의 태그로 변환해 준다.
//리액트에서 { 자바스크립트 식} => {이 자바스크립트 시작,} 자바스크립트 종료
import App from './App.jsx'

//import A01 from './components/A01JSX.jsx'

//1. 안전하지 않는 라이프 사이클 메서드 사용
//2. Legacy API, Legacy context 사용시 경고
//3. 권한하지 않는 findDOMMode 메서드 이용시 경고
//4. 그외...
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {App()} */}
    <App></App> {/* 태그 형식을 사용하려면 맨 앞문자가 무조건 대문자여야 된다*/}
    {/* <A01 A01 ></A01 > */}
  </StrictMode>,
)
