const fs = require('fs')
const express = require('express')
const morgan = require('morgan')

// 创建app对象
const app = express()

// 应用第三方中间件
const writeStream = fs.createWriteStream('./logs/access.log')
app.use(morgan('combined', { stream: writeStream }))

// 编写中间件
app.post('/login', (req, res, next) => {
  res.end('登录成功, 欢迎回来~')
})

// 启动服务器
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
