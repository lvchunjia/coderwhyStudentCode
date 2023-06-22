const KoaRouter = require('@koa/router')

// 1.创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

// 2.在路由中注册中间件: path/method
userRouter.get('/', (ctx, next) => {
  ctx.body = 'users list data~'
})
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = '获取某一个用户' + id
})
userRouter.post('/', (ctx, next) => {
  ctx.body = '创建用户成功~'
})
userRouter.delete('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = '删除某一个用户' + id
})

module.exports = userRouter
