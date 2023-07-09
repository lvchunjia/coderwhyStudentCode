const express = require("express");

// 创建app对象
const app = express();

// 内置的中间件: 直接将一个文件夹作为静态资源
app.use(express.static("./uploads"));
app.use(express.static("./build"));

// 编写中间件
app.post("/login", (req, res, next) => {});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
