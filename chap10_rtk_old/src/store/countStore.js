// countStore.js
// 동기, 비동기를 한번에 기술
/*
  reducer: {
    countStore: countStore,
  },
  을
  reducer: {
    countStore: countStore.reducer,
  },
  형태로 변경해야 한다
*/
import { createSlice } from '@reduxjs/toolkit'

// 비동기 처리의 action export
// export const countPlus = ()

const countStore = createSlice({
  name: 'countStore',       // 내부적으로 참조할 이름. 중복되면 에러
  initialState: {
    storeName: 'Count Store',
    count: 0,
  },
  // 동기 처리
  // default와는 별개로 개별 export 처리를 해야 한다
  reducers: {
    increaseAction: (state, action) => {
      state.count = state.count + action.payload;
    },
    decreaseAction: (state) => {
      state.count = state.count - 1;
    },
  },
  // 비동기 처리
  extraReducers: (builder) => { }
})
export default countStore;      // index.js에서 호출할 이름

// 동기 처리를 위한 reducer의 action export를 별도로 처리
export const { increaseAction, decreaseAction } = countStore.actions;


/*
// @reduxjs/toolkit의 동기 처리 구현
import { createReducer, createAction } from '@reduxjs/toolkit'

// 내부적으로 'COUNT_INCREASE'은 type 속성으로
//  전달되는 값은 action의 payload라는 이름으로 전달된다
// export const increaseAction = createAction('COUNT_INCREASE');

// 전달되는 값을 수정할 필요가 있다면 기술
export const increaseAction = createAction('COUNT_INCREASE', (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = 0;
  return { payload: value }
});
export const decreaseAction = createAction('COUNT_DECREASE');

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = createReducer(init, (builder) => {
  builder.addCase(increaseAction, (state, action) => {
    // 불변성 없이 immer처럼 복사된 객체를 조작하는 형태로 구현
    state.count = state.count + action.payload;
  });
  builder.addCase(decreaseAction, (state) => {
    state.count = state.count - 1;
  });
});
export default countStore;
*/


/*
// redux 방식 - 비동기 처리는 할 수 없다.
// 비동기 처리는 redux-thunk, redux-saga 등의 미들웨어 라이브러리가 필요
// key name을 상수화
const COUNT_INCREASE = 'COUNT_INCREASE';
const COUNT_DECREASE = 'COUNT_DECREASE';

// action => 외부에서 countStore 함수를 호출하는 메서드
// 값을 전달할 컴포넌트에서 dispatch를 이용해서 호출
export const increaseAction = (num) => {
  return { type: COUNT_INCREASE, payload: num }
}
export const decreaseAction = () => {
  return { type: COUNT_DECREASE }
}

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = (state = init, action) => {
  switch (action.type) {
    // { type: 'COUNT_INCREASE', payload: 2 }
    case COUNT_INCREASE:
      return { ...state, count: state.count + action.payload }
    // { type: 'COUNT_DECREASE' }
    case COUNT_DECREASE:
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}
export default countStore;
*/
