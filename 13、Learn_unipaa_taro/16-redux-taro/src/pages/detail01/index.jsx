import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'

const Detail01 = () => {
  const counter = useSelector((state) => {
    // state 是全局的 state
    return state.counter.counter
  })
  const homeData =  useSelector((state) => {
    return state.home.homeData
  })
  return (
    <View>
      <View>{counter}</View>
      <View>{JSON.stringify(homeData)}</View>
    </View>
  )
}
export default Detail01
