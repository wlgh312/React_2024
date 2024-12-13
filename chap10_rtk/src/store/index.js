

import countStore from './countStore';
import todoStore from './todoStore'

import { configureStore } from '@reduxjs/toolkit';

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
});
export default store;

