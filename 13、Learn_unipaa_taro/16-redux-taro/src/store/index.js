import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter'
import homeReducer from './feature/home'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
})

// 导出函数
export default store
