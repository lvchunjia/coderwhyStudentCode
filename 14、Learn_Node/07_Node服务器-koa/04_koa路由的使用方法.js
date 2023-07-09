const Koa = require("koa");
const userRouter = require("./router/userRouter");
// const KoaRouter = require('@koa/router')

// 创建服务器app
const app = new Koa();

// 路由的使用
// // 1.创建路由对象
// const userRouter = new KoaRouter({ prefix: '/users' })

// // 2.在路由中注册中间件: path/method
// userRouter.get('/', (ctx, next) => {
//   ctx.body = 'users list data~'
// })
// userRouter.get('/:id', (ctx, next) => {
//   const id = ctx.params.id
//   ctx.body = '获取某一个用户' + id
// })
// userRouter.post('/', (ctx, next) => {
//   ctx.body = '创建用户成功~'
// })
// userRouter.delete('/:id', (ctx, next) => {
//   const id = ctx.params.id
//   ctx.body = '删除某一个用户' + id
// })
// userRouter.patch('/:id', (ctx, next) => {
//   const id = ctx.params.id
//   ctx.body = '修改某一个用户' + id
// })

// 3.让路由中的中间件生效
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 启动服务器
app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
