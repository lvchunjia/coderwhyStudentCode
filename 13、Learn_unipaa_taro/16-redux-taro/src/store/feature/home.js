import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Taro from '@tarojs/taro'
import { addNumber } from './counter'

// 3.导出异步的action
export const getHomeData = createAsyncThunk(
  "get/homeData",  // get/homeData/状态  作为action的type
  async (extraInfo, { dispatch, getState }) => {
    console.log(extraInfo); // 10010 异步action的参数
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'http://codercba.com:9060/beike/api/powerscreen',
        success(res) {
          // 这里可以触发其它的 模块的action
          dispatch(addNumber(2))

          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
})
// 1.定义一个切片的reducer
const homeSlice = createSlice({
  name: "home", // home/changeHomeData 作为action的type
  initialState: {
    homeData: {},
  },
  reducers: {
    // 局部的 state
    changeHomeData(state, { payload }) {
      state.homeData = payload
    }
  },
  extraReducers: {
    // state 也是局部的state
    [getHomeData.fulfilled](state, { type, meta, payload }){
      state.homeData = payload.data
    }
  }
})

// 2.导出同步的action
export const { changeHomeData } = homeSlice.actions
// 4.导出reducer
export default homeSlice.reducer
