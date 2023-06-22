const fs = require("fs");

// 1.有一段内容(客户端传递过来http/express/koa)
const content = "hello world, my name is coderwhy";

// 2.文件的写入操作
fs.writeFile(
  "./ccc.txt",
  content,
  {
    encoding: "utf8",
    flag: "a",
  },
  (err) => {
    if (err) {
      console.log("文件写入错误:", err);
    } else {
      console.log("文件写入成功");
    }
  }
);
