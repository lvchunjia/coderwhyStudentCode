const mysql = require('mysql2')

// 1.创建一个连接
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'Coderwhy123.',
  connectionLimit: 5
})

// 2.执行一个SQL语句: 预处理语句
const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ?;'

connectionPool.promise().execute(statement, [1000, 9]).then((res) => {
  const [values, fields] = res
  console.log('-------------------values------------------')
  console.log(values)
  console.log('-------------------fields------------------')
  console.log(fields)
}).catch(err => {
  console.log(err)
})
