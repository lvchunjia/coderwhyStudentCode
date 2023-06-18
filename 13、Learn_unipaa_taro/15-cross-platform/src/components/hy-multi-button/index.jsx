import { View } from '@tarojs/components'
import PropTypes from 'proptypes'
import classNames from 'classnames'
import Style from './index.module.scss'
import { Component } from 'react'

export default class HYButtonClass extends Component {
  handleBtnClick(e) {
    // 2.可以使用 taro 平台的api
    Taro.setStorageSync('taro', {
      name: 'liujun'
    })
  }
  render() {
    return (
      <View className={classNames(Style['hy-btn'], Style[this.props.type])} onClick={ (e)=> this.handleBtnClick(e) }>
        {this.props.children}
      </View>
    )
  }
}
HYButtonClass.propTypes = {
  type: PropTypes.string, // array  bool func number  object string symbol
  onBtnClick: PropTypes.func
}
