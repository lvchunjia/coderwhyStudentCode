import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { memo } from 'react'
import PropTypes from 'proptypes'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import Style from './index.module.scss'

export default class HyButtonClass extends Component {

  $instance = Taro.getCurrentInstance()

  // 1.组件生命周期
  constructor() {
    super(...arguments)
    console.log('constructor');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }
  UNSAFE_componentWillMount () {
    // 监听页面的onReady生命周期
    const onReadyEventId = this.$instance.router.onReady
    Taro.eventCenter.once(onReadyEventId, () => {
      console.log('Taro.eventCenter.once onReady')
    })

    console.log('UNSAFE_componentWillMount');
   }

  componentDidMount () {



    console.log('componentDidMount');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  handleBtnClick(e) {
    this.props.onBtnClick(e)
  }

  render () {
    console.log('render');
    return (
      <View className={classNames(Style['hy-btn'], Style[this.props.type || 'default'])} onClick={ (e)=> this.handleBtnClick(e) }>
        {this.props.children}
      </View>
    )
  }

  // 2.页面生命周期(没有执行？是的)
  onLoad() {
    console.log('page onLoad');
  }
  onReady() {
    console.log('page onReady');
  }
  componentDidShow () {
    console.log('page componentDidShow');
  }

  componentDidHide () {
    console.log('page componentDidHide');
  }

}

HyButtonClass.propTypes = {
  type: PropTypes.string, // array  bool func number  object string symbol
  onBtnClick: PropTypes.func
}
