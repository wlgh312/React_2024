

import { createSlice } from '@reduxjs/toolkit'

const todoStore = createSlice({
  name: 'todoStore',
  initialState: {
    todoList: [
      { id: 1, text: '첫번째 할 일', done: false },
      { id: 2, text: '두번째 할 일', done: true },
    ],
    text: ''
  },
  reducers: {
    // action.payload => no
    updateTodo: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList[idx].done = !state.todoList[idx].done
    },
    // action.payload => no
    deleteTodo: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList.splice(idx, 1)
    },
    // action.payload => 할일
    addTodo: (state, action) => {
      const cnt = state.todoList.at(-1) ? state.todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text: action.payload, done: false };
      state.todoList.push(todo);
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => { }
})
export default todoStore;
export const { updateTodo, deleteTodo, addTodo, changeText } = todoStore.actions;

