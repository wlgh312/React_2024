import React from "react";
import A07InnerOne from './A07InnerOne'

function A07OuterOne(props) {
  const { name, age, changeAge } = props;
  return (
    <div className="mb-5">
      <h3>A07 Outer One</h3>

      <div className="mb-3">
        props: {name}
      </div>

      <div className="mb-3">
        Age: {age}
      </div>

      <button onClick={() => changeAge(200)}>AGE</button>
    </div >
  );
}

export default A07InnerOne(A07OuterOne);