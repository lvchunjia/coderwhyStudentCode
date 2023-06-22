// commonjs
const fs = require("fs");

// 1.同步读取
const res1 = fs.readFileSync("./aaa.txt", {
  encoding: "utf8",
});
console.log("同步读取", res1);
console.log("后续的代码~");

// 2.异步读取: 回调函数
fs.readFile(
  "./aaa.txt",
  {
    encoding: "utf8",
  },
  (err, data) => {
    if (err) {
      console.log("读取文件错误:", err);
      return;
    }
    console.log("读取文件结果:", data);
  }
);
console.log("后续的代码~");

// 3.异步读取: Promise
fs.promises
  .readFile("./aaa.txt", {
    encoding: "utf-8",
  })
  .then((res) => {
    console.log("获取到结果:", res);
  })
  .catch((err) => {
    console.log("发生了错误:", err);
  });
