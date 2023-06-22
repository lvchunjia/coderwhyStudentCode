const fs = require('fs')

// 1.对文件夹进行重命名
// fs.rename('./why', './kobe', (err) => {
//   console.log("重命名结果:", err)
// })

// 2.对文件重命名
fs.rename('./ccc.txt', './ddd.txt', (err) => {
  console.log("重命名结果:", err)
})
