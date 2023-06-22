const Koa = require('koa')

// 创建app
const app = new Koa()

// 中间件: path/method使用路由
app.use((ctx, next) => {
  if (ctx.path === '/users') {
    if (ctx.method === 'GET') {
      ctx.body = 'user data list'
    } else if (ctx.method === 'POST') {
      ctx.body = 'create user success~'
    }
  } else if (ctx.path === '/home') {
    ctx.body = 'home data list~'
  } else if (ctx.path === '/login') {
    ctx.body = '登录成功, 欢迎回来~'
  }
})

// 启动服务器
app.listen(6000, () => {
  console.log('koa服务器启动成功~')
})
