// countStore.js
const COUNT_INCREASE = 'COUNT_INCREASE';
const COUNT_DECREASE = 'COUNT_DECREASE';

const increaseAction = (num) => {
  return { type: COUNT_INCREASE, payload: num }
}
const decreaseAction = () => {
  return { type: COUNT_DECREASE }
}

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = (state = init, action) => {
  switch (action.type) {
    case COUNT_INCREASE:
      return { ...state, count: state.count + action.payload }
    case COUNT_DECREASE:
      return { ...state, count: state.count - 1 }
    default:
      return state;
  }
}


const configureStore = (storeFunc) => {
  let state = storeFunc(undefined, '');

  const getState = () => {
    return { ...state }

    // 각 컴포넌트에 전파
  }

  const dispatch = (action) => {
    // action => { type: COUNT_INCREASE, payload: 5 }
    state = storeFunc(state, action);
  }

  return {
    getState,
    dispatch
  }
}

const store = configureStore(countStore);
console.log(store.getState())

store.dispatch({ type: COUNT_INCREASE, payload: 5 })
console.log(store.getState());

store.dispatch(increaseAction(6))
console.log(store.getState());

