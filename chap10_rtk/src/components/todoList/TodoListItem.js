
import React, { memo } from 'react';
import style from '@css/todos.module.css'
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '@store/todoStore'

function TodoListItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? style.done : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary"
          onClick={() => dispatch(updateTodo(todo.id))}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger"
          onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </td>
    </tr>
  );
}
export default memo(TodoListItem);

