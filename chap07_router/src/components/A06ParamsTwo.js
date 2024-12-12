import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product'

function ParamsComp() {
  const { '*': params } = useParams();
  // console.log(params);
  const paramArr = params.split('/');
  // console.log(paramArr);

  const location = useLocation();

  const item = product.find(item => item.id === Number(paramArr[0] || 1001));

  return (
    <div>
      <h3>Parameter</h3>
      <br />

      <div>
        Id: {paramArr[0] || 1001}<br />
        Name: {paramArr[1] || 'Unknown'}<br />
        Location: {decodeURIComponent(location.pathname)}
      </div>
      <br />

      <div>
        ID: {item.id}<br />
        NAME: {item.name}<br />
        CATEGORY: {item.category}
      </div>
    </div>
  );
};
export default ParamsComp;

