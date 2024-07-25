import { unstable_noStore as noStore } from 'next/cache';
import pool from '@/config/db';
import { ItemsRes, TagsRes } from './definitions';

//查找标签列表
export async function fetchListTags() {
  noStore();
  // 从连接池中获取连接
  const connection = await pool.getConnection();
  try {
    const query = 'SELECT * FROM tags';
    const [rows, fileds] = await connection.query(query);
    console.log('fetchListTags', rows);
    return rows as TagsRes[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tags data.');
  } finally {
    connection.release();
    // await pool.end();
  }
}

//根据标签id查找项目
export async function fetchItemsById(id: string) {
  // console.log("----fetchItemsById id----", id);
  noStore();
  // 从连接池中获取连接
  const connection = await pool.getConnection();
  try {
    // const query = `SELECT * FROM items Where tagId=${id}`;
    // const [rows, fileds] = await connection.query(query);
    const query = `SELECT * FROM items WHERE tagId = ?`;
    const [rows, fields] = await connection.query(query, [id]);
    // console.log("----fetchItemsById----", rows);
    return rows as ItemsRes[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch items data.');
  } finally {
    connection.release();
    // await pool.end();
  }
}
