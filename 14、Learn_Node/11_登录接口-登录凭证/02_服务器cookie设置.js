const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })

/**
 * 1.服务器设置cookie
 * 2.客户端(浏览器)保存cookie
 * 3.在同一个作用域下访问服务器, 自动携带cookie
 * 4.服务器验证客户端携带的cookie
 */
userRouter.get('/login', (ctx, next) => {
  // 在服务器中为登录的客户端, 设置一个cookie
  ctx.cookies.set('slogan', 'ikun', {
    maxAge: 60 * 1000 * 5
  })

  ctx.body = '登录成功~'
})

userRouter.get('/list', (ctx, next) => {
  // 验证用户的登录凭证: 携带口号 ikun
  const value = ctx.cookies.get('slogan')
  console.log(value)
  if (value === 'ikun') {
    ctx.body = `user list data~`
  } else {
    ctx.body = `没有权限访问用户列表, 请先登录~`
  }
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log('服务器启动成功~')
})
