import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';

let pool: Pool | undefined = undefined;

const database = {
  host: 'localhost',
  user: 'solace_demo',
  database: 'solace_demo',
  timezone: 'Z'
}

const createPool = async (password: string): Promise<Pool> => (
  mysql.createPool({ ...database, password })
);

export const getClient = async (): Promise<Pool> => {
  if (pool) return pool;
  const password = process.env.DB_PASSWORD;
  const newPool = await createPool(password);
  pool = newPool;
  return pool;
}

