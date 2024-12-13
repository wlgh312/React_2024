import { createSlice } from '@reduxjs/toolkit'

const todoStore = createSlice({
  name: 'todoStore',
  initialState: {
    todoList: [
      { id: 1, text: '첫번째 할 일', done: false },
      { id: 2, text: '두번째 할 일', done: true },
      { id: 3, text: '세번째 할 일', done: false },
    ],
    text: '',
    cnt: 4
  },
  reducers: {
    updateTodoAction: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    deleteTodoAction: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList.splice(idx, 1);
    },
    addTodoAction: (state, action) => {
      const todo = { id: state.cnt++, text: action.payload, done: false };
      state.todoList.push(todo)
    },
    changeTextAction: (state, action) => {
      state.text = action.payload;
    }
  },
  extraReducers: (builder) => { }
});
export default todoStore;
export const { updateTodoAction, deleteTodoAction, addTodoAction, changeTextAction } = todoStore.actions;
