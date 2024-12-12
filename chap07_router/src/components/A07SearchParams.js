

// npm i query-string
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { product } from './data/product'

function SearchParams() {
  const [params, setParams] = useSearchParams();
  // console.log(params);
  const location = useLocation();

  const item = product.find(item => item.id === Number(params.get('no') || 1001));

  useEffect(() => {
    // 넘어오는 params 정보를 변경
    // setParams({ no: '1006', name: 'AAA', address: '충무시' });
  }, [setParams])

  return (
    <div>
      <h3>SearchParams</h3>
      <br />

      <div>
        pathname: {decodeURIComponent(location.pathname)}<br />
        search: {decodeURIComponent(location.search)}<br />
        hash: {decodeURIComponent(location.hash)}
      </div>
      <br />

      <div>
        Name: {params.get('name')}<br />
        No: {params.get('no')}<br />
        Address: {params.get('address')}
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
export default SearchParams;

