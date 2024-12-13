

// TodoContext.js
import { createContext, useCallback, useRef, useState } from 'react'
import { produce } from 'immer'

const TodoContext = createContext({
  state: {
    todoList: [],
    text: ''
  },
  action: {
    updateTodo: (id) => { },
    deleteTodo: (id) => { },
    addTodo: (text) => { },
    changeText: (text) => { },
  }
});

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
}

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState(makeTodo());
  const [text, setText] = useState('');
  const cnt = useRef(6);

  const updateTodo = useCallback((id) => {
    /*
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) return { ...todo, done: !todo.done }
        else return todo;
      });
    });
    */
    setTodoList(todoList => {
      return produce(todoList, draft => {
        const idx = draft.findIndex(todo => todo.id === id);
        draft[idx].done = !draft[idx].done;
      })
    })
  }, []);
  const deleteTodo = useCallback(id => {
    // setTodoList(todoList => todoList.filter(todo => todo.id !== id));
    setTodoList(todoList => {
      return produce(todoList, draft => {
        const idx = draft.findIndex(todo => todo.id === id);
        draft.splice(idx, 1);
      })
    })
  }, []);
  const addTodo = useCallback((text) => {
    const todo = { id: cnt.current++, text, done: false }
    // setTodoList(todoList => todoList.concat(todo));
    setTodoList(todoList => {
      return produce(todoList, draft => {
        draft.push(todo);
      })
    })
  }, []);
  const changeText = useCallback((text) => setText(text), []);

  const data = {
    state: { todoList, text },
    action: { updateTodo, deleteTodo, addTodo, changeText }
  }

  return (
    <TodoContext.Provider value={data}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext }


