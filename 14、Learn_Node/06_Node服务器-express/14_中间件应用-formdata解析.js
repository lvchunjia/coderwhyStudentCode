const express = require("express");
const multer = require("multer");

// 创建app对象
const app = express();

// express内置的插件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 编写中间件
const formdata = multer();

app.post("/login", formdata.any(), (req, res, next) => {
  console.log(req.body);
  res.end("登录成功, 欢迎回来~");
});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
