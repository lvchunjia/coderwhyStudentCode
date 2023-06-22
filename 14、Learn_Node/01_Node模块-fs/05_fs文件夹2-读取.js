const fs = require("fs");

// 读取文件夹
// 1.读取文件夹, 获取到文件夹中文件名的字符串
fs.readdir("./why", (err, files) => {
  console.log(files);
});

// 2.读取文件夹, 获取到文件夹中文件的信息
fs.readdir("./why", { withFileTypes: true }, (err, files) => {
  files.forEach((item) => {
    if (item.isDirectory()) {
      console.log("item是一个文件夹:", item.name);

      fs.readdir(
        `./why/${item.name}`,
        { withFileTypes: true },
        (err, files) => {
          console.log(files);
        }
      );
    } else {
      console.log("item是一个文件:", item.name);
    }
  });
});

// 3.递归的读取文件夹中所有的文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`);
      } else {
        console.log("获取到文件:", item.name);
      }
    });
  });
}
readDirectory("./why");
