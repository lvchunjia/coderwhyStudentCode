import { Component } from 'react'
import { View, Text, Button, Navigator } from '@tarojs/components'
import './index.scss'
import { addNumber, subNumber } from '../../store/feature/counter'
import { getHomeData } from '../../store/feature/home'
import { useSelector, useDispatch } from 'react-redux'
const Index = () => {
  const counter = useSelector((state) => {
    // state 是全局的 state
    return state.counter.counter
  })
  const homeData =  useSelector((state) => {
    // state 是全局的 state
    return state.home.homeData
  })
  const dispatch = useDispatch()
  function handleBtnClick() {
    dispatch(addNumber(1))
  }
  function handleGetHomeDataClick() {
    dispatch(getHomeData('10010'))
  }
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={ handleBtnClick }>{counter}</Button>
      <Button onClick={ handleGetHomeDataClick }>getHomeData</Button>
      <View>{JSON.stringify(homeData)}</View>
      <Navigator url="/pages/detail01/index" openType='navigate'>
          <Button>Detail01 navigate</Button>
        </Navigator>
    </View>
  )
}

export default  Index
