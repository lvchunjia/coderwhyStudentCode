import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import routes from './router'
import { changeMessageAction } from './store/modules/counter'
import Demo02 from './views/demo/demo02'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

import { Button } from 'antd'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      direction: state.counter.direction,
      names: state.counter.names
    }),
    shallowEqualApp
  )

  /** 事件处理函数 */
  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('呵呵呵呵呵'))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>

      <Demo02 name="why" age={18} />
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <button onClick={handleChangeMessage}>修改message</button>
    </div>
  )
}

export default App
