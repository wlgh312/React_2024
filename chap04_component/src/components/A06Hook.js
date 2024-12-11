
import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { reducerFunc, init } from './../reducer/A06Reducer.js'
/*
const reducerFunc = (state, action) => {
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

const init = {
  num: 'A',
  str: 'B',
  today: new Date(),
  avg: '',
  list: []
}
*/

function A06Hook() {
  const [data, dispatch] = useReducer(reducerFunc, init);

  /*
  // data => 상태변수
  // dispatch => 상태변수를 변경하는 메서드의 참조값
  // useReducer(함수, 초기값)
  const [data, dispatch] = useReducer((state, action) => {
    // console.log(state);
    // console.log(action)

    // 1. dispatch() 함수 호출 => (state, action) => { } 함수가 호출됨
    // 2. dispatch의 매개변수로 { type: ?, payload: 상태를 변경할 값 }
    // 3. state의 값을 변경
    // 4. 변경된 state 값을 리턴해서 data(상태변수)가 변경
    // 5. 상태변수가 변경되었으므로 화면 리 렌더링
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
  },
    {
      num: 'A',
      str: 'B',
      today: new Date(),
      avg: '',
      list: []
    }
  );
  */

  const getAverage = useMemo(() => {
    console.log('계산중...');
    if (data.list.length === 0) return 0;
    const total = data.list.reduce((sum, item) => {
      return sum + item;
    }, 0);
    return total / data.list.length;
  }, [data.list]);


  const changeNumber = useCallback((evt) => {
    dispatch({ type: 'A05HOOK/CHANGENUMBER', payload: evt.target })
  }, []);
  const changeString = useCallback((evt) => {
    dispatch({ type: 'A05HOOK/CHANGESTRING', payload: evt.target })
  }, []);
  const addList = useCallback((evt) => {
    dispatch({ type: 'A05HOOK/ADDLIST' })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'A05HOOK/CHANGETODAY' })
    }, 3000)
  }, []);

  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control"
          onChange={changeNumber} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control"
          onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {data.today.toLocaleString()}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(', ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm"
            onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;

