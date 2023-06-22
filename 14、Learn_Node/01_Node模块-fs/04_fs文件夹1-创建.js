const fs = require('fs')

// 创建文件夹 directory
fs.mkdir('./why', (err) => {
  console.log(err)
})
