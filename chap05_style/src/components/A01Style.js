

/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useCallback } from 'react'

// 외부 CSS 파일은 import를 해야 한다
// class 이름을 className="name" 형태로 사용
import './css/A01Style.css'

// scss, sass 파일은 외부 모듈 필요 - 설치 후 재 시작 필요
// npm i sass
import './css/A01Style.scss'


function A01Style() {
  // or useRef
  const myStyle = { backgroundColor: 'lightgray', padding: '10px', fontWeight: 'bold' };
  const [style, setStyle] = useState({
    backgroundColor: 'lightgray', padding: '10px', fontWeight: 'bold'
  });

  const enterEvent = useCallback(() => {
    setStyle((style) => ({ ...style, backgroundColor: 'orange' }));
  }, []);
  const leaveEvent = useCallback(() => {
    setStyle((style) => ({ ...style, backgroundColor: 'lightgray' }));
  }, []);


  const myCSS = 'title color';
  const [yourCSS, setYourCSS] = useState('title color');

  const enterCSSEvent = useCallback(() => {
    setYourCSS('title');
  }, []);
  const leaveCSSEvent = useCallback(() => {
    setYourCSS('title color');
  }, []);

  const [isCheck, setIsCheck] = useState(true);
  // isCheck 변경 이벤트 핸들러 구현 해 보세요

  // 변수명을 조합
  const title = 'title';
  const color = 'color';

  return (
    <div className="mb-5">
      {/* style 속성은 반드시 자바스크립트이 식으로 구현해야 한다 
        값은 객체로 구현 style={{key: value, ...}}
      */}
      <h3 style={{ backgroundColor: 'lightgray', padding: '10px', fontWeight: 'bold' }}>A01 Style</h3>
      <h3 style={myStyle}>A01 Style</h3>
      <h3 style={style} onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>A01 Style</h3>

      <h3 className="title color">A01 Style</h3>
      <h3 className={myCSS}>A01 Style</h3>
      <h3 className={yourCSS} onMouseEnter={enterCSSEvent} onMouseLeave={leaveCSSEvent}>A01 Style</h3>

      <h3 className={isCheck ? 'title color' : ''}>A01 Style</h3>
      <h3 className={`${title} ${color}`}>A01 Style</h3>

      <h3 className="scssTitle">A01 Style</h3>
    </div >
  );
}

export default A01Style;


