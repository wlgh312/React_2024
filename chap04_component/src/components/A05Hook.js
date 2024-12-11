import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

//Hook. 함수에서만 사용 가능
//React 16.8 버전부터 사용 가능
function A05Hook() {
  //1. 상태변수 정의 - useState
  //const [getter, setter] = useState(초기화);
  const [data, setData] = useState({
    num: '',
    str: '',
    avg: '',
    list: [],
  })

  const [today, setToday] = useState(new Date());

  //4. 값이 유지되는 변수 정의 - useRef
  //값이 변경되도 화면 리렌더링 하지 않는다는 점이 useState와 다르다.
  const count = useRef(10); //count= {current:10};

  //4. DOM 요소에 대한 참조 설정 - useRef
  //DOM에 input 이름이 num인 요소에 ref={numRef}와 같이 지정하면
  //numRef.current가 요소에 대한 참조값을 갖는다.
  const numRef = useRef(null);

  //2. 함수 자체를 메모이제이션(cache화) - useCallBack
  //함수가 메모리에 로드될 때 함수 내부에서 사용한 변수 값도 고정되서 메모리에 올라간다.
  //즉 내부의 data 변수의 값은 항상 {str:'', num:''}으로
  //이 값을 기반으로 수정한다.

  //[]에 변수명, 함수명이 있으면 지정한 변수, 함수의 값이 변경된 경우
  //새롭게 메모이제이션(캐시화) 하면서 캐시화 당시의 변수값을 기반으로 정의된다.

  //const 변수명 = useCallback(() => {...}, [의존관계 변수 및 함수]);
  /*
  const changeString = useCallback((evt) => {
    //const newData = {...data, evt.target.name]:evt.target.value};
    setData({ ...data, [evt.target.name]: evt.target.value });
  }, [data]);

  const changeNumber = useCallback((evt) => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = '';
    setData({ ...data, [evt.target.name]: evt.target.value })
  }, [data]);
  */

  const changeString = useCallback((evt) => {
    //x는 현재 변경되어 있는 data 변수 값이다. 즉 현재 setter의 getter 값이 주입된다.
    setData((x) => {
      return { ...x, [evt.target.name]: evt.target.value };

    })
  }, []);

  const changeNumber = useCallback((evt) => {
    //관례상 매개변수 이름을 getter 이름으로 지정
    setData((data) => {
      let value = Number(evt.target.value);
      if (isNaN(value)) value = '';
      return { ...data, [evt.target.name]: evt.target.value }
    })
  }, []);

  //이렇게 사용할 일이 거의 없다.
  const increase = useCallback((x) => {
    count.current = count.current + x;
  }, []);
  const decrease = useCallback(() => {
    count.current = count.current - 1;
  }, []);

  const addList = useCallback(() => {
    setData((data) => {
      if (data.avg > 0) {
        const newList = [...data.list, data.avg]
        const newData = { ...data, list: newList }
        // setData(newData);
        return newData;
      }
    })
  }, []);

  //5. 함수의 리턴값을 메모이제이션(캐쉬화) => userMemo)
  //useMemo를 이용한 함수는 setter와 같이 함수로 호출하지 않고 프로퍼티 형태로 참조
  //의존관계가 없으면 처음 실행할 값(빈 배열)만 가지고 계산
  //의존관계로 지정한 변수가 변경되는 경우만 새롭게 실행된다.(캐쉬화)
  const getAverage = useMemo(() => {
    console.log('계산중...');
    if (data.list.length === 0) return 0;
    //reduce 함수(누적함수) : [10, 11. 100] => [10, 21, 121]
    const total = data.list.reduce((sum, item) => {
      return sum + item;
    }, 0);
    return total / data.list.length;
  }, [data.list]);
  //3. LifeCycle Hook
  //여러번 기술해도 된다 => 필요에 따라 1번 또는 여러번 실행될 수 있도록 분리 가능
  //ajax 토신, 다른 라이브러리와 동기화 등에 사용된다.
  //[] 기술 안함=>useEffect가 없는 것과 동일. 리렌더링 시점마다 재실행된다.
  //[] 빈 배열 => 처음 로드될 때 1번만 실행된다.
  //[변수명 또는 메서드명] => 지정된 변수, 메서드가 변경된 경우만 재실행된다.
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date());
    }, 2000);

    //cleanUp 함수
    return () => { console.log('Hello') }
  }, [data.num]);

  useEffect(() => {
    //console.log(numRef.current);
    //console.log(document.querySelector('input[name="num"]'));
    //document.querySelector('input[name="num"]').style.backgroundColor = 'orange';
    numRef.current.style.backgroundColor = 'gray';
  }, []);

  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        {/* 값 변경을 실시간으로 볼 수 없음, 다른 상태변수가 변경되면 그때 변경된 값이 표시된다. */}
        Count: {count.current} <br />
        <button onClick={() => increase(2)}> + </button>
        <button onClick={decrease}> - </button>
      </div>

      <div className="mb-3">
        Num:{data.num}
        <input type="text" name="num" className="form-control" onChange={changeNumber} value={data.value} ref={numRef} />
      </div>

      <div className="mb-3">
        Str:{data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} value={data.value} />
      </div>

      <div className="mb-3">
        Today: {today.toLocaleString()}< br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(', ')} / {getAverage}
        <div className="input-group">
          <input type="number" name="avg" className="form-control" value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
