const Koa = require('koa')
const static = require('koa-static')

const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = "哈哈哈哈"
// })

app.use(static('./uploads'))
app.use(static('./build'))

app.listen(8000, () => {
  console.log('koa服务器启动成功~')
})
