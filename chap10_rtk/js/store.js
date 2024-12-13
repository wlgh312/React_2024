

const increaseAction = (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = 0;
  return { type: 'COUNT/INCREASE', payload: value }
}
const decreaseAction = () => {
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

const configureStore = (reduceFunc) => {
  let state = reduceFunc(undefined, '');
  // console.log(state);

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = reduceFunc(state, action);
    // 이벤트 통지
  }

  return {
    getState: getState,
    dispatch,
  }
}

const store = configureStore(countStore);
console.log(store.getState());

store.dispatch({ type: 'COUNT/INCREASE', payload: 10 })
console.log(store.getState());

store.dispatch(increaseAction(3))
console.log(store.getState());


