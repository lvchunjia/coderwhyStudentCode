const Koa = require('koa')
const KoaRouter = require('@koa/router')
const koaSession = require('koa-session')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })

const session = koaSession({
  key: 'sessionid',
  signed: true,
  maxAge: 60 * 1000 * 5,
  // httpOnly: true
}, app)
// 加盐操作
app.keys = ['aaa', 'bbb', 'why', 'kobe']
app.use(session)

userRouter.get('/login', (ctx, next) => {
  // 在服务器中为登录的客户端, 设置一个cookie
  ctx.session.slogan = 'ikun'

  ctx.body = '登录成功~'
})

userRouter.get('/list', (ctx, next) => {
  // 验证用户的登录凭证: 携带口号 ikun
  const value = ctx.session.slogan
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
