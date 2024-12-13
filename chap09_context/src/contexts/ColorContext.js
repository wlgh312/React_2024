

// ColorContext.js

// Java의 interface처럼 골격만 정의한다
// 구현은 사용하는 곳에서 구현(데이터 값 정의)
import { createContext } from 'react'
const ColorContext = createContext({
  contextName: '',
  color: '',
  setColor: () => { }
});
export default ColorContext;

