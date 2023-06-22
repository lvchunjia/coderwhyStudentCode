const mysql = require('mysql2')

// 1.创建一个连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'Coderwhy123.'
})

// 2.执行一个SQL语句: 预处理语句
const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ?;'
connection.execute(statement, [1000, 8], (err, values) => {
  console.log(values)
})

// connection.destroy()
