const fs = require("fs");

// 1.从文件中读取buffer
fs.readFile("./aaa.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});

fs.readFile("./aaa.txt", (err, data) => {
  console.log(data.toString());
});

fs.readFile("./aaa.txt", (err, data) => {
  data[0] = 0x6d;
  console.log(data.toString());
});

// 2.读取一个图片的二进制(node中有一个库sharp)
fs.readFile("./kobe02.png", (err, data) => {
  console.log(data);
});
