const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

// 创建app对象
const app = new Koa()

// 使用第三方中间件解析body数据
app.use(bodyParser())
const formParser = multer()

// 注册路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

/**
 * 1.get: params方式, 例子:/:id
 * 2.get: query方式, 例子: ?name=why&age=18
 * 3.post: json方式, 例子: { "name": "why", "age": 18 }
 * 4.post: x-www-form-urlencoded
 * 5.post: form-data
 */
// 1.get/params
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = 'user list data~:' + id
})

// 2.get/query
userRouter.get('/', (ctx, next) => {
  const query = ctx.query
  console.log(query)
  ctx.body = '用户的query信息' + JSON.stringify(query)
})

// 3.post/json(使用最多)
userRouter.post('/json', (ctx, next) => {
  // 注意事项: 不能从ctx.body中获取数据
  console.log(ctx.request.body, ctx.req.body)

  // ctx.body用于向客户端返回数据
  ctx.body = '用户的json信息'
})

// 4.post/urlencoded
userRouter.post('/urlencoded', (ctx, next) => {
  console.log(ctx.request.body)

  ctx.body = '用户的urlencoded信息'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


// 5.post/form-data
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = '用户的formdata信息'
})

// 启动服务器
app.listen(6000, () => {
  console.log('koa服务器启动成功~')
})
