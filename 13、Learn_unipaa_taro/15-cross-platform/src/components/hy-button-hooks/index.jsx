import { View } from '@tarojs/components'
import { useLoad, useReady } from '@tarojs/taro'
import { memo } from 'react'
import PropTypes from 'proptypes'
import classNames from 'classnames'
import Style from './index.module.scss'
import { useEffect } from 'react'

const HYButtonHooks = memo(function(props) {
  const { type, onBtnClick } = props;

  // 1.组件生命周期 hooks
  useEffect(() => {
    console.log('组件过载完');
    return ()=> {
      console.log('组件将销毁');
    }
  }, [])

  // 2.页面生命周期
  useLoad(() => {
    console.log('页面生命周期 useLoad');
  })

  useReady(() => {
    console.log('页面生命周期 useReady');
  })

  function handleBtnClick (e) {
    onBtnClick && onBtnClick(e)
  }

  return (
    <View className={classNames(Style['hy-btn'], type)} onClick={ handleBtnClick }>
      {props.children}
    </View>
  )
})

export default HYButtonHooks
// 传入的 prop 值类型不正确时，JavaScript 控制台将会显示警告。
// Warning: Failed prop type: Invalid prop `type` of type `number`
HYButtonHooks.propTypes = {
  type: PropTypes.string, // array  bool func number  object string symbol
  onBtnClick: PropTypes.func
}
