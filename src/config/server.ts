import pool from '@/config/db';
import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// 处理 SIGINT 信号来关闭数据库连接池
process.on('SIGINT', async () => {
  console.log('Closing database connections...');
  await pool.end(); //释放连接池
  console.log('Database connections closed.');
  process.exit(0);
});

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url || '', true);
    handle(req, res, parsedUrl);
  }).listen(3001, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
});
