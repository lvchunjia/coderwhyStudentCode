const Koa = require('koa')

// 创建app
const app = new Koa()

// 中间件
app.use((ctx, next) => {
  // 1.请求对象
  console.log(ctx.request) // 请求对象: Koa封装的请求对象
  console.log(ctx.req) // 请求对象: Node封装的请求对象

  // 2.响应对象
  console.log(ctx.response) // 响应对象: Koa封装的响应对象
  console.log(ctx.res) // 响应对象: Node封装的响应对象

  // 3.其他属性
  console.log(ctx.query)
  // console.log(ctx.params)

  next()
})

app.use((ctx, next) => {
  console.log('second middleware~')
})


// 启动服务器
app.listen(6000, () => {
  console.log('koa服务器启动成功~')
})
