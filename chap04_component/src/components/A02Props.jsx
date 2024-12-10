import React, { useState } from "react"
//vite로 프로젝트 생성한 경우는 설치해야 한다.
//npm i prop-types
import PropTypes from 'prop-types'

function A02Props(props) {
  console.log(props);
  const { type, age, title, setTitle, cnt, arr, addArray, data, onAdd, check = 'True', children } = props;
  const [address, setAddress] = useState('서울');


  const getTime = () => {
    const today = new Date();
    switch (type) {
      case 'date':
        return today.toLocaleDateString();
      case 'time':
        return today.toLocaleTimeString();
      default:
        return today.toLocaleString();
    }
  }

  const chageAddress = (x) => setAddress(x);
  const changeTitle = () => setTitle && setTitle('챕터');

  return (
    <div className="mb-5">
      <h1>A02Props / props는 읽기전용</h1>
      <div className="mb-3">
        {/* 부모에서 전달한 View가 표시되는 위치 */}
        {/* {props.children} */}
        {children}
      </div>

      <div className="mb-3">
        Address: {address}<br />
        Time: {getTime()}<br />

        {/* 기본형은 값이 없으면 undefined이다 => 화면 출력 안됨  */}
        Age: {age + 1}/{typeof Age} < br />
        Title: {title} / {props.title}
        Count: {cnt}<br />
        Check: {check}<br />

        {/* 참조형은 값이 없으면 undefined이다 => undefined[0] */}
        {/* optional chainning 연산자 => 함수는 사용 불가 */}
        Array: {arr?.[0]} / {arr?.[1]} / {arr?.[2]}<br />
        Object: {data?.name} / {data?.age} / {data?.address}<br />
        Function: {onAdd && onAdd(10, 20)}
      </div>

      <div>
        <button onClick={() => chageAddress('부산')}>Address</button>
        <button onClick={changeTitle}>Title</button>
        <button onClick={addArray && addArray}>Add Array</button>
      </div>
    </div>
  )
}

//static
A02Props.propTypes = {
  type: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  arr: PropTypes.array,
  data: PropTypes.object,
  cnt: PropTypes.number,
  // check: PropTypes.bool,
  onAdd: PropTypes.func,
  setTitle: PropTypes.func
}

export default A02Props