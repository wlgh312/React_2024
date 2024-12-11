export const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'A05HOOK/CHANGENUMBER':
      // action.payload => evt.target
      let value = Number(action.payload.value);
      if (Number.isNaN(value)) value = ''
      return { ...state, [action.payload.name]: value };
    case 'A05HOOK/CHANGESTRING':
      // action.payload => evt.target
      return { ...state, [action.payload.name]: action.payload.value };
    case 'A05HOOK/CHANGETODAY':
      // action의 값은 없음
      return { ...state, today: new Date() };
    case 'A05HOOK/ADDLIST':
      // action의 값은 없음
      if (state.avg > 0) {
        const newList = state.list.concat(state.avg)
        return { ...state, list: newList };
      } else {
        return state;
      }
    default:
      return state;
  }
}

export const init = {
  num: 'A',
  str: 'B',
  today: new Date(),
  avg: '',
  list: []
}