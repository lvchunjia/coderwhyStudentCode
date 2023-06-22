const express = require('express')

const app = express()

// 注册普通的中间件
// app.use((req, res, next) => {
//   console.log('match normal middleware')
//   res.end('--------')
// })

// 注册路径匹配的中间件
// 路径匹配的中间件是不会对请求方式(method)进行限制
app.use('/home', (req, res, next) => {
  console.log('match /home middleware')
  res.end('home data')
})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
