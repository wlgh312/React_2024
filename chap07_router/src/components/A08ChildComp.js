

import React from "react";
import { Link, Outlet } from "react-router-dom";

function ChildComp() {
  return (
    <div>
      <h3>Children Component</h3>
      <br />

      <div>
        <Link to="/child">ONE</Link> | {' '}
        <Link to="/child/two">TWO</Link> | {' '}
        <Link to="/child/three">THREE</Link> | {' '}
        <Link to="/state">STATE</Link> | {' '}
      </div>

      <hr />

      <Outlet></Outlet>
    </div>
  );
};
export default ChildComp;


