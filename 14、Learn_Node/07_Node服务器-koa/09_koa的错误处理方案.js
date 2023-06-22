const Koa = require('koa')
const KoaRouter = require('@koa/router')

// 创建app对象
const app = new Koa()

// 注册路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/', (ctx, next) => {
  const isAuth = false
  if (isAuth) {
    ctx.body = 'user list data~'
  } else {
    // ctx.body = {
    //   code: -1003,
    //   message: '未授权的token, 请检测你的token'
    // }
    // EventEmitter
    ctx.app.emit('error', -1003, ctx)
  }
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 独立的文件: error-handle.js
app.on('error', (code, ctx) => {
  const errCode = code
  let message = ''
  switch (errCode) {
    case -1001:
      message = '账号或者密码错误~'
      break
    case -1002:
      message = '请求参数不正确~'
      break
    case -1003:
      message = '未授权, 请检查你的token信息'
      break
  }

  const body = {
    code: errCode,
    message
  }

  ctx.body = body
})

// 启动服务器
app.listen(6000, () => {
  console.log('koa服务器启动成功~')
})
