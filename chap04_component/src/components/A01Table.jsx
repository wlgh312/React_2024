import React, { useState } from 'react'

function A01Table() {
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
    <div>
      <h3>A01Table</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>No</th>
            <th>TODO</th>
            <th>DONE</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item, i) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.text}</td>
              <td>{item.done ? '완료' : '미완료'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={changeTodo}>GET</button>
    </div>
  )
}

export default A01Table