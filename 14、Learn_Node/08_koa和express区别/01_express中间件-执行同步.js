const express = require("express");

// 创建app对象
const app = express();

// 编写中间件
app.use((req, res, next) => {
  console.log("express middleware01");
  req.msg = "aaa";
  next();
  // 返回值结果
  res.json(req.msg);
});

app.use((req, res, next) => {
  console.log("express middleware02");
  req.msg += "bbb";
  next();
});

app.use((req, res, next) => {
  console.log("express middleware03");
  req.msg += "ccc";
});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
