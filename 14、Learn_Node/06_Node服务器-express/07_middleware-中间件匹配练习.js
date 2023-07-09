const express = require("express");

const app = express();

// 1.注册两个普通的中间件
app.use((req, res, next) => {
  console.log("normal middleware01");
  next();
});

app.use((req, res, next) => {
  console.log("normal middleware02");
  next();
});

// 2.注册路径path/method的中间件
app.get(
  "/home",
  (req, res, next) => {
    console.log("/home get middleware01");
    next();
  },
  (req, res, next) => {
    console.log("/home get middleware02");
    next();
  }
);

app.post("/login", (req, res, next) => {
  console.log("/login post middleware");
  next();
});

// 3.注册普通的中间件
app.use((req, res, next) => {
  console.log("normal middleware03");
  next();
});

app.use((req, res, next) => {
  console.log("normal middleware04");
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
