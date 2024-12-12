import React, { useCallback, useState } from "react";
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoTemplate = () => {
  /*
  [
   { id: 1, text: '첫번재 할 일', done: false },
   { id: 2, text: '두번재 할 일', done: false },
  ]
  */
  const [todoList, setTodoList] = useState(makeTodo());
  const [text, setText] = useState('');

  const changeText = useCallback((text) => {
    setText(text);
  }, []);

  //추가
  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      const cnt = todoList.at(-1) ? todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text: text, done: false };
      return todoList.concat(todo);
    });
  }, []);

  //usecallback사용 안함=>updateTodo, deleteTodo는 리렌더링 될때마다 새로운 값으로 만들어짐
  const updateTodo = useCallback((id) => {
    // const todos = todoList.map(todo => {
    //   if (todo.id === id) {
    //     return { ...todo, done: !todo.done }
    //   } else {
    //     return todo;
    //   }
    // });
    /*
    const todos = todoList.map(todo => {
      return (todo.id === id) ? { ...todo, done: !todo.done } : todo;
    });
    setTodoList(todos);
    */
    setTodoList((todoList) => {
      const todos = todoList.map(todo => {
        return (todo.id === id) ? { ...todo, done: !todo.done } : todo;
      });
      return todos;
    })
  }, []);

  const deleteTodo = useCallback((id) => {
    // const todos = todoList.filter(todo => (todo.id !== id));
    // setTodoList(todos);
    setTodoList((todoList) => {
      const todos = todoList.filter(todo => {
        return (todo.id !== id) ? true : false;
      });
      return todos;
    });
  }, []);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoForm addTodo={addTodo} text={text} changeText={changeText}></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
};
export default TodoTemplate;
