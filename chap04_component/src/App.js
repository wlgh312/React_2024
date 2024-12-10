import React, { useState } from "react";

import A01State from './components/A01State.jsx'
import A02Props from './components/A02Props.jsx'
import A01Table from './components/A01Table.jsx'
import A02Table from './components/A02Table.jsx'
import A03Event from './components/A03Event.js'

function App() {
  const [title, setTitle] = useState('CHAP 01');
  const count = 100;
  const [arr, setArray] = useState([10, 20]);

  //변경할 수 없는 상태변수 => 일반변수로 변환해야 한다.
  const [data] = useState({ name: 'App', age: 100 });
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    setArray(arr.concat(random));
  }

  const [todoList, setTodoList] = useState([]);

  const changeTodo = () => {
    //Ajax를 이용해서 서버로부터 데이터 가져와서 값 대입
    setTodoList([
      { id: 1, text: '첫 번째 할 일', done: true },
      { id: 2, text: '두 번째 할 일', done: false },
      { id: 3, text: '세 번째 할 일', done: true },
    ])
  }

  return (
    <div className="m-3">
      <h1>Chap04 Coponent</h1>

      <A03Event></A03Event>

      <A02Table todoList={todoList}></A02Table>
      <button onClick={changeTodo}>GET</button>
      <A01Table></A01Table>

      {/* 상위 컴포넌트(컨테이너 컴포넌트)에서 하위 컴포넌트에 값 전달 */}
      <A02Props type="time" age={10} title={title} setTitle={setTitle} cnt={count} arr={arr} addArray={addArray} data={data} onAdd={onAdd}>
        <div>이 One이 제대로 출력될까...</div>
      </A02Props>

      <A02Props type="date" age={20} title={title} setTitle={setTitle}>
        <div>이 Two가 제대로 출력될까...</div>
        <A01State></A01State>
      </A02Props>

      <A01State></A01State>
    </div >
  );
}

export default App;
