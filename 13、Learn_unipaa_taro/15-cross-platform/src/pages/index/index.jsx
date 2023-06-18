import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import HyButtonClass from '../../components/hy-button-class'
import HYButtonHooks from '../../components/hy-button-hooks'
import HyMultiButton from '../../components/hy-multi-button'
const Index = () => {
  let platform = process.env.TARO_ENV
  return (
    <View className='index'>

      {
        platform === 'h5' && (
          <>
            <View>1.HyButtonClass</View>
            <HyButtonClass>Button h5</HyButtonClass>
          </>
        )
      }

      {
        platform === 'weapp' && (
          <>
            <View>2.HYButtonHooks</View>
            <HYButtonHooks>Button weapp</HYButtonHooks>
          </>
        )
      }

      <View>2.跨平台组件</View>
      <HyMultiButton type="default">HyMultiButton</HyMultiButton>

    </View>
  )
}

export default  Index
