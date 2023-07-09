const Koa = require("koa");
const KoaRouter = require("@koa/router");

// 创建app对象
const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
  console.log("koa middleware01");
  ctx.msg = "aaa";
  next();

  // 返回结果
  ctx.body = ctx.msg;
});

app.use((ctx, next) => {
  console.log("koa middleware02");
  ctx.msg += "bbb";
  next();
});

app.use((ctx, next) => {
  console.log("koa middleware03");
  ctx.msg += "ccc";
});

// 启动服务器
app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
