

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function NavigateComp() {
  // 페이지 이동에 관련된 Hook (함수 즉 location.assign(path) )
  const navigate = useNavigate();

  const goURL = useCallback((url) => {
    navigate(url, { replace: true });   // history에 기술 안함
  }, [navigate]);

  return (
    <div>
      <h3>Navigate</h3>
      <br />

      <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        <button onClick={() => navigate(1)}>FORWARD</button>
        <button onClick={() => navigate('/')}>HOME</button>
        <button onClick={() => goURL('/props')}>PARAMETER</button>
      </div>
    </div>
  );
};
export default NavigateComp;

