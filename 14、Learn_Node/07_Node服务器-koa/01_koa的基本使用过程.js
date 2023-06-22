const Koa = require('koa')

// 创建app对象
const app = new Koa()

// 注册中间件(middleware)
// koa的中间件有两个参数: ctx/next
app.use((ctx, next) => {
  console.log('匹配到koa的中间件')
  ctx.body = '哈哈哈哈哈'
})

// 启动服务器
app.listen(6000, () => {
  console.log('koa服务器启动成功~')
})
