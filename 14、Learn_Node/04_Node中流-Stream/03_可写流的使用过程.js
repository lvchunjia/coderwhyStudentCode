const fs = require("fs");

// 1.一次性写入内容
fs.writeFile(
  "./bbb.txt",
  "hello world",
  {
    encoding: "utf-8",
    flag: "a+",
  },
  (err) => {
    console.log("写入文件结果:", err);
  }
);

// 2.创建一个写入流
const writeStream = fs.createWriteStream("./ccc.txt", {
  flags: "a",
});

writeStream.on("open", (fd) => {
  console.log("文件被打开", fd);
});

writeStream.write("coderwhy");
writeStream.write("aaaa");
writeStream.write("bbbb", (err) => {
  console.log("写入完成:", err);
});

writeStream.on("finish", () => {
  console.log("写入完成了");
});

writeStream.on("close", () => {
  console.log("文件被关闭~");
});

// 3.写入完成时, 需要手动去掉用close方法
// writeStream.close()

// 4.end方法:
// 操作一: 将最后的内容写入到文件中, 并且关闭文件
// 操作二: 关闭文件
writeStream.end("哈哈哈哈");
