/* eslint-disable no-unused-vars */


import React, { useState } from "react";

// 이 컴포넌트만 사용 가능한 CSS를 정의하고자 하는 경우는 파일명에 반드시 module을 붙인다
// one.css => one.module.css 로 변경
// import를 default 형식으로 import
import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A02StyleModule() {
  // console.log(one);
  const [check, setCheck] = useState(true);

  return (
    <div className="mb-5">
      {/* innerColor는 설정에 :global이 붙어 있음 */}
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
      <h3 className={check ? one.title : ''}>A02 Style <span className="innerColor">Module</span> Component</h3>

      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>

      <h3 className={`${two.title} ${check ? two.reverse : ''}`}>A02 Style Module Component</h3>
    </div>
  );
}

export default A02StyleModule;


