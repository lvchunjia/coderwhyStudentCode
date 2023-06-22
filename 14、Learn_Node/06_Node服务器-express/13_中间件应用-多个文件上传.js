const express = require('express')
const multer = require('multer')

// 创建app对象
const app = express()

// 应用一个express编写第三方的中间件
const upload = multer({
  // dest: './uploads'
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './uploads')
    },
    filename(req, file, callback) {
      callback(null, Date.now() + '_' + file.originalname)
    }
  })
})

// 编写中间件
// 上传单文件: single方法
app.post('/avatar', upload.single('avatar') , (req, res, next) => {
  console.log(req.file)
  res.end('文件上传成功~')
})

// 上传多文件: 
app.post('/photos', upload.array('photos'), (req, res, next) => {
  console.log(req.files)
  res.end('上传多张照片成功~')
})

// 启动服务器
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
