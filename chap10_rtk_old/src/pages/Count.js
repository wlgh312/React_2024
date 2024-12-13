import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 호출할 action을 import
import { increaseAction, decreaseAction } from './../store/countStore'

function Counter() {
  // useSelector => store의 상태 값 참조
  const { storeName, count } = useSelector(store => store.countStore);
  // dispatch => store의 action 호출
  const dispatch = useDispatch();

  const increase = useCallback((num) => {
    dispatch(increaseAction(num))
  }, [dispatch])

  return (
    <div>
      <h3>
        {storeName}: {count}
      </h3>
      <button onClick={() => increase(3)}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  );
}
export default Counter;
