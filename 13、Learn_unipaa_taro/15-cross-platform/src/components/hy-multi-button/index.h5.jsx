import PropTypes from 'proptypes'
import classNames from 'classnames'
import Style from './index.module.scss'
import { Component } from 'react'

export default class HYButtonClass extends Component {
  handleBtnClick(e) {
     // 1.可以使用 window 平台的api
     window.localStorage.setItem('win', JSON.stringify({
      name: 'liujun'
     }))
  }

  render() {
    return (
      <div className={classNames(Style['hy-btn'], Style[this.props.type])} onClick={ (e)=> this.handleBtnClick(e) }>
        {this.props.children}
      </div>
    )
  }
}
HYButtonClass.propTypes = {
  type: PropTypes.string, // array  bool func number  object string symbol
  onBtnClick: PropTypes.func
}
