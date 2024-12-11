import React from "react";
import A07InnerOne from './A07InnerOne'
import A07InnerTwo from './A07InnerTwo'

function A07OuterOne(props) {
  const { name } = props;                       // app 전달
  const { age, changeAge, address } = props;    // A07InnerOne
  const { tel, changeTel } = props;             // A07InnerTwo

  return (
    <div className="mb-5">
      <h3>A07 Outer Two</h3>

      <div className="mb-3">
        props: {name}
      </div>

      <div className="mb-3">
        Age: {age}<br />
        Address: {address}<br />
        Tel: {tel}
      </div>

      <button onClick={() => changeAge(300)}>AGE</button>
      <button onClick={() => changeTel('010-2222-2222')}>AGE</button>
    </div >
  );
}

export default A07InnerTwo(A07InnerOne(A07OuterOne));