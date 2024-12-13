import { configureStore } from '@reduxjs/toolkit'
import countStore from './countStore'
import todoStore from './todoStore'
import contextStore from './contextStore'

const store = configureStore({
  // 각 공유할 자원을 통합하는 작업을 한다
  reducer: {
    countStore: countStore.reducer,
    todoStore: todoStore.reducer,
    contextStore: contextStore.reducer,
  },
  // 데이터 직렬화에 대한 설정
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false })
  }
});
export default store;
