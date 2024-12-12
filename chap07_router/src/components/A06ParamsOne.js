

import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { product } from './data/product'

function ParamsComp() {
  // 패스에 대한 정보
  // const params = useParams();
  const { no, name } = useParams();
  // console.log(params);

  // 주소줄 정보
  const location = useLocation();
  // console.log(location);

  // no기반으로 Ajax 요청
  const item = product.find(item => item.id === Number(no));

  return (
    <div>
      <h3>Parameter</h3>
      <br />

      <div>
        Id: {no}<br />
        Name: {name}<br />
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

