

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store의 값을 변경할 Action
import { increaseAction, decreaseAction } from '@store/countStore'

function Counter() {
  // store의 값 참조. countStore는 configureStore에 등록한 이름
  const { storeName, count } = useSelector(store => store.countStore);
  // store의 reducer 함수를 참조하는 값
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {storeName}: {count}
      </h3>
      <button onClick={() => dispatch(increaseAction(2))}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  );
}
export default Counter;

