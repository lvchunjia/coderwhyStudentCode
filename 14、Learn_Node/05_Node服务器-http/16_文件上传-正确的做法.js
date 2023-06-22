const http = require("http");
const fs = require('fs')

// 1.创建server服务器
const server = http.createServer((req, res) => {
  req.setEncoding('binary')

  const boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
  console.log(boundary)

  // 客户端传递的数据是表单数据(请求体)
  let formData = ''
  req.on("data", (data) => {
    formData += data
  });

  req.on("end", () => {
    console.log(formData)
    // 1.截图从image/jpeg位置开始后面所有的数据
    const imgType = 'image/jpeg'
    const imageTypePosition = formData.indexOf(imgType) + imgType.length
    let imageData = formData.substring(imageTypePosition)

    // 2.imageData开始位置会有两个空格
    imageData = imageData.replace(/^\s\s*/, '')

    // 3.替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

    // 4.将imageData的数据存储到文件中
    fs.writeFile('./bar.png', imageData, 'binary', () => {
      console.log('文件存储成功')
      res.end("文件上传成功~");
    })
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
