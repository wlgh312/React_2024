

import React, { useContext, useRef } from 'react'
import { TodoContext } from './../contexts/TodoContext'

function TodoForm() {
  const inputFiled = useRef();
  const { state, action } = useContext(TodoContext);

  const sendData = (evt) => {
    evt.preventDefault();

    if (state.text.trim() !== '') {
      action.addTodo(state.text);
      action.changeText('');
      inputFiled.current.focus();
    }
  }

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled}
          value={state.text} onChange={(evt) => action.changeText(evt.target.value)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default TodoForm;


