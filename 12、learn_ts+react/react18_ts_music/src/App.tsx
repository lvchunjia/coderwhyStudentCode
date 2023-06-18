import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import routes from './router'
import { changeMessageAction } from './store/modules/counter'
// import { IRootState } from './store'

// import store from './store'

// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>

function App() {
  // const { count, message } = useSelector(
  //   (state: IRootState) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   }),
  //   shallowEqual
  // )

  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
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
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <button onClick={handleChangeMessage}>修改message</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
