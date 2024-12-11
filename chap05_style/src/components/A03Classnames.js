

import React from "react";
// npm i classnames
import cns from 'classnames'

import './css/A03Style.css'
import two from './css/A02Style2.module.css'

function A03Classnames() {
  const txt = "text";
  const isChecked = true;

  return (
    <div className="mb-5">
      <h3 className={cns('bg', 'text', 'space')}>A03 ClassNames Module</h3>
      {/* 참조는 기본적으로 class 이름이다 */}
      <h3 className={cns('bg', { text: false, space: true })}>A03 ClassNames Module</h3>

      {/* 변수를 사용한다면 변수(오브젝트의 키) 형태로 참조 */}
      <h3 className={cns('bg', { [txt]: isChecked, space: isChecked })}>A03 ClassNames Module</h3>

      <h3 className={cns(two.title, two.reverse)}>A03 ClassNames Module</h3>
      <h3 className={cns({ [two.title]: true, [two.reverse]: isChecked })}>A03 ClassNames Module</h3>
    </div>
  );
}

export default A03Classnames;


