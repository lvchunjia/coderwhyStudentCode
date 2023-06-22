const fs = require('fs')

const writeStream = fs.createWriteStream('./ddd.txt', {
  // mac上面是没有问题
  // flags: 'a+',
  // window上面是需要使用r+
  flags: 'r+',
  start: 5
})

writeStream.write('my name is why')
writeStream.close()
