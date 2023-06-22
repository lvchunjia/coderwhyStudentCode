const express = require('express')

const app = express()


// 注册中间件: 对path/method都有限制
// app.method(path, middleware)
app.get('/home', (req, res, next) => {
  console.log('match /home get method middleware')
  res.end('home data')
})


app.post('/users', (req, res, next) => {
  console.log('match /users post method middleware')
  res.end('create user success')
})


app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
