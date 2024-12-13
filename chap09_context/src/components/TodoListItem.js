

import React, { useContext } from "react";
import "./css/todos.css";
import { TodoContext } from './../contexts/TodoContext'

function TodoListItem(props) {
  const { todo } = props;                       // TodoList로 부터 받은 값
  const { action } = useContext(TodoContext);   // Context로 부터 받은 값

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary"
          onClick={() => action.updateTodo(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger"
          onClick={() => action.deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);


