

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm i bootstrap sweetalert2
// npm i react-router-dom axios
// npm i @reduxjs/toolkit react-redux

// redux, redux-thunk => @reduxjs/toolkit
// react-redux => redux hook 제공

// Router 설정
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
// import 할 파일이 index.js, index.json의 경우 파일명 생략 가능
import store from './store'

/*
// @reduxjs/toolkit 설정
import countStore from '@store/countStore';
import todoStore from '@store/todoStore'

import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer: {
    // countStore,
    countStore: countStore.reducer,
    todoStore: todoStore.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck: true => 데이터 직렬화
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

