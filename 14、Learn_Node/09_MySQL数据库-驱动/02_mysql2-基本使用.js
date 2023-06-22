const mysql = require('mysql2')

// 1.创建一个连接(连接上数据库)
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'Coderwhy123.'
})


// 2.执行操作语句, 操作数据库
const statement = 'SELECT * FROM `students`;'
// structure query language: DDL/DML/DQL/DCL
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log('查询失败:', err)
    return
  }

  // 查看结果
  console.log(values)
  // console.log(fields)
})
