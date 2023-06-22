const express = require('express')

// 1.创建express的服务器
const app = express()

// 客户端访问URL: /login和/home
app.post('/login', (req, res) => {
  // 处理login请求
  res.end('登录成功, 欢迎回来~')
})

app.get('/home', (req, res) => {
  res.end('首页的轮播图/推荐数据列表~')
})

// 2.启动服务器, 并且监听端口
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
