import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter", // counter/addNumber 作为 action的type
  // 1.定义state
  initialState: {
    counter: 888
  },
  // 2.定义reducer
  reducers: {
    // 局部的state, 和 action => {type, payload}
    addNumber(state, action) {
      console.log(action.type);
      console.log(action.payload);
      state.counter = state.counter + action.payload
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload
    }
  }
})

// 3.导出 actions
export const { addNumber, subNumber } = counterSlice.actions
// 4.导出reducer
export default counterSlice.reducer

