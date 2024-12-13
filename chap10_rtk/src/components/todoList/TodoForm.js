

import React, { useCallback } from 'react';

import { addTodo, changeText } from '@store/todoStore'
import { useDispatch, useSelector } from 'react-redux';

function TodoForm() {
  const { text } = useSelector(store => store.todoStore);
  const dispatch = useDispatch();

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      dispatch(changeText(''));
      document.querySelector('input').focus();
    }
  }, [text, dispatch])

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control"
          value={text} onChange={(evt) => dispatch(changeText(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;


