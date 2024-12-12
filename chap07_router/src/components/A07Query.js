


// npm i query-string
import queryString from 'query-string'
import React from "react";
import { useLocation } from "react-router-dom";

import { product } from './data/product'

function QueryComp() {
  const location = useLocation();
  // console.log(location);
  const search = queryString.parse(location.search);

  const item = product.find(item => item.id === Number(search.no || 1001));

  return (
    <div>
      <h3>Query</h3>
      <br />

      <div>
        pathname: {decodeURIComponent(location.pathname)}<br />
        search: {decodeURIComponent(location.search)}<br />
        hash: {decodeURIComponent(location.hash)}
      </div>
      <br />

      <div>
        Name: {search.name}<br />
        No: {search.no}<br />
        Address: {search.address}
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
export default QueryComp;


