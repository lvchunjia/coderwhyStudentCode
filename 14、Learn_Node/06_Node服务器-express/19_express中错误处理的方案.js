const express = require('express')

// 创建app对象
const app = express()

app.use(express.json())

// 编写中间件
app.post('/login', (req, res, next) => {
  // 1.获取登录传入的用户名和密码
  const { username, password } = req.body

  // 2.对用户名和密码进行判断
  if (!username || !password) {
    next(-1001)
  } else if (username !== 'coderwhy' || password !== '123456') {
    next(-1002)
  } else {
    res.json({
      code: 0,
      message: '登录成功, 欢迎回来~',
      token: '323dfafadfa3222'
    })
  }
})


// 错误处理的中间件
app.use((errCode, req, res, next) => {
  const code = errCode
  let message = '未知的错误信息'

  switch(code) {
    case -1001:
      message = '没有输入用户名和密码'
      break
    case -1002:
      message = '输入用户名或密码错误'
      break
  }

  res.json({ code, message })
})


// 启动服务器
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
