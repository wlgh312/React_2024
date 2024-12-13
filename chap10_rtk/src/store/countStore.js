/*
  createSlice를 사용하는 경우는 store setting의 
  reducer: {
    countStore,
  },
  항목을
  reducer: {
    countStore: countStore.reducer
  },
  와 변경해야 한다
*/

import { createSlice } from '@reduxjs/toolkit'
// 비동기 Action을 여기에 기술
const countStore = createSlice({
  name: 'countStore',                 // 내부 참조명. 중복되면 에러
  initialState: {
    storeName: 'Count Store',
    count: 0,
  },
  // reducers의 action은 default와 별도로 개별 export를 해 주어야 한다
  reducers: {
    increaseAction: (state, action) => {
      state.count = state.count + action.payload;
    },
    decreaseAction: (state) => {
      state.count = state.count - 1;
    },
  },
  // 비동기 처리. 이전의 redux-thunk, redux-saga를 이용했던 부분이 통합됨
  // 비동기 처리는 위에 export const actionName = () => { ... }
  extraReducers: (builder) => {

  }
});
export default countStore;
export const { increaseAction, decreaseAction } = countStore.actions;


/*
// @reduxjs/toolkit의 동기 처리 
import { createAction, createReducer } from '@reduxjs/toolkit'

// 외부에서 호출될 Action.
// 기본으로 받은 매개변수를 payload라는 이름으로 reducer 함수에 전달한다
// export const increaseAction = createAction('COUNT/INCREASE');
export const increaseAction = createAction('COUNT/INCREASE', (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = 0;
  // payload라는 이름으로 값만 전달한다
  return { payload: value }
});
export const decreaseAction = createAction('COUNT/DECREASE');

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = createReducer(init, (builder) => {
  builder.addCase(increaseAction, (state, action) => {
    // 불변성 생각하지 말고 immer처럼 사용한다
    state.count = state.count + action.payload;
  });
  builder.addCase(decreaseAction, (state, action) => {
    // 불변성 생각하지 말고 immer처럼 사용한다
    state.count = state.count - 1;
  });
})
export default countStore;
*/

/*
// 이전의 redux 방식
// action => 외부에서 호출 할 메서드 (상태 변경)
export const increaseAction = (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = 0;
  return { type: 'COUNT/INCREASE', payload: value }
}
export const decreaseAction = () => {
  return { type: 'COUNT/DECREASE' }
}

const init = {
  storeName: 'Count Store',
  count: 0,
}

const countStore = (state = init, action) => {
  switch (action.type) {
    case 'COUNT/INCREASE':
      return { ...state, count: state.count + action.payload };
    case 'COUNT/DECREASE':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
export default countStore;
*/


