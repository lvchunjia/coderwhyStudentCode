const fs = require('fs')

// 1.通过流读取文件
const readStream = fs.createReadStream('./aaa.txt', {
 start: 8,
 end: 22,
 highWaterMark: 3
})


// 2.监听读取到的数据
readStream.on('data', (data) => {
  console.log(data.toString())
})

// 3.补充其他的事件监听
readStream.on('open', (fd) => {
  console.log('通过流将文件打开~', fd)
})

readStream.on('end', () => {
  console.log('已经读取到end位置')
})

readStream.on('close', () => {
  console.log('文件读取结束, 并且被关闭')
})
