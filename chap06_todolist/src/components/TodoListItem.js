import React, { memo } from "react";
import style from "./css/todos.module.css";

function TodoListItem(props) {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? style.done : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
//자신이 받은 props의 값이 이전과 동일한 경우만 메모이제이션이 된다.
//여기서는 todo, updateTodo, deleteTodo 값이 항상 동일해야 memo가 성립된다.
export default memo(TodoListItem);
