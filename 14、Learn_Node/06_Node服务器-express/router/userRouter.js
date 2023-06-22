const express = require('express')

// 1.创建路由对象
const userRouter = express.Router()

// 2.定义路由对象中的映射接口
userRouter.get('/', (req, res, next) => {
  res.json('用户列表数据')
})
userRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.json('某一个用户的数据:' + id)
})
userRouter.post('/', (req, res, next) => {
  res.json('创建用户成功')
})
userRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id
  res.json('删除某一个用户的数据:' + id)
})
userRouter.patch('/:id', (req, res, next) => {
  const id = req.params.id
  res.json('修改某一个用户的数据:' + id)
})

// 3.将路由导出
module.exports = userRouter
