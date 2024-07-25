import mysql from 'mysql2/promise';
const { MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
// 创建数据库连接池
const pool = mysql.createPool({
  host: MYSQL_HOST, // MySQL 主机地址
  user: MYSQL_USER, // MySQL 用户名
  password: MYSQL_PASSWORD, // MySQL 密码
  database: MYSQL_DATABASE, // MySQL 数据库名称
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
