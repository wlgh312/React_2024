import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm i bootstrap sweetalert2
// npm i react-router-dom@6.26.2 axios
// npm i redux redux-thunk(redux-saga) - 설치 안함
// npm i @reduxjs/toolkit react-redux

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

// import 해야 할 파일 명이 index.json, index.js의 경우 파일명 생략 가능
import store from './store'
/*
import { configureStore } from '@reduxjs/toolkit'
import countStore from './store/countStore'
import todoStore from './store/todoStore'
const store = configureStore({
  // 각 공유할 자원을 통합하는 작업을 한다
  reducer: {
    countStore: countStore.reducer,
    todoStore: todoStore.reducer,
  },
  // 데이터 직렬화에 대한 설정
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: true })
  }
})
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
