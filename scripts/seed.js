const mysql = require('mysql2/promise'); // 使用 mysql2/promise 进行异步操作
const { users, tags, items } = require('../src/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
// require("dotenv").config(); // 加载 .env 文件

// 从 .env 文件中获取数据库连接信息
const { MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

async function seedUsers(connection) {
  try {
    // 创建 "users" 表
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);

    console.log(`Created "users" table`);

    // 插入数据到 "users" 表
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return connection.query(
          `
          INSERT INTO users (id, name, email, password)
          VALUES (?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE id=id;
        `,
          [user.id, user.name, user.email, hashedPassword]
        );
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return insertedUsers;
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedTags(connection) {
  try {
    // 创建 "tags" 表
    await connection.query(`
      CREATE TABLE IF NOT EXISTS tags (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
      );
    `);

    console.log(`Created "tags" table`);

    // 插入数据到 "tags" 表
    const insertedTags = await Promise.all(
      tags.map(async (tag) => {
        return connection.query(
          `
          INSERT INTO tags (id, name, color, link)
          VALUES (?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE id=id;
        `,
          [tag.id, tag.name, tag.color, tag.link]
        );
      })
    );

    console.log(`Seeded ${insertedTags.length} tags`);

    return insertedTags;
  } catch (error) {
    console.error('Error seeding tags:', error);
    throw error;
  }
}

async function seedItems(connection) {
  try {
    // 创建 "tags" 表
    await connection.query(`
        CREATE TABLE IF NOT EXISTS items (
          id VARCHAR(36) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,  
          description VARCHAR(255) NOT NULL,
          link VARCHAR(255) NOT NULL,
          githubLink VARCHAR(255),
          tagId VARCHAR(36) NOT NULL,
          FOREIGN KEY (tagId) REFERENCES tags(id)
        );
    `);

    console.log(`Created "items" table`);

    // 插入数据到 "items" 表
    const insertedItems = await Promise.all(
      items.map(async (item) => {
        return connection.query(
          `
          INSERT INTO items (id, name, description, link, githubLink, tagId)
          VALUES (?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE id=id;
          `,
          [
            item.id,
            item.name,
            item.description,
            item.link,
            item.githubLink,
            item.tagId
          ]
        );
      })
    );

    console.log(`Seeded ${insertedItems.length} items`);

    return insertedItems;
  } catch (error) {
    console.error('Error seeding items:', error);
    throw error;
  }
}

async function main() {
  // 创建 MySQL 连接池
  const pool = mysql.createPool({
    host: MYSQL_HOST, // MySQL 主机地址
    user: MYSQL_USER, // MySQL 用户名
    password: MYSQL_PASSWORD, // MySQL 密码
    database: MYSQL_DATABASE // MySQL 数据库名称
  });

  // 从连接池中获取连接
  const connection = await pool.getConnection();
  try {
    // await seedUsers(connection);
    // await seedTags(connection);
    // await seedItems(connection);
  } finally {
    // 释放连接
    connection.release();
    await pool.end(); // 关闭连接池
  }
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
