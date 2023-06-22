const express = require('express')

const app = express()

// 注册两个实际请求的中间件
// 案例一: 用户登录的请求处理 /login post => username/password
app.post('/login', (req, res, next) => {
  // 1.获取本次请求过程中传递过来的json数据
  let isLogin = false
  req.on('data', (data) => {
    const dataString = data.toString()
    const dataInfo = JSON.parse(dataString)
    if (dataInfo.username === 'coderwhy' && dataInfo.password === '123456') {
      isLogin = true
    }
  })

  req.on('end', () => {
    if (isLogin) {
      res.end('登录成功, 欢迎回来~')
    } else {
      res.end('登录失败, 请检测账号和密码是否正确~')
    }
  })
})

// 案例二: 注册用户的请求处理 /register post => username/password
app.post('/register', (req, res, next) => {
    // 1.获取本次请求过程中传递过来的json数据
    let isRegister = false
    req.on('data', (data) => {
      const dataString = data.toString()
      const dataInfo = JSON.parse(dataString)
      // 查询数据库中该用户是否已经注册过
      isRegister = false
    })
  
    req.on('end', () => {
      if (isRegister) {
        res.end('注册成功, 开始你的旅程~')
      } else {
        res.end('注册失败, 您输入的用户名被注册~')
      }
    })
})

app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
