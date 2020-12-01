require('dotenv').config();

export const origin = process.env.ORIGIN || 'http://localhost:3000';
export const port = process.env.PORT || 4000;
export const expiration = process.env.JWT_EXPIRATION_MS
  ? parseInt(process.env.JWT_EXPIRATION_MS)
  : 24 * 60 * 60 * 1000;
export const secret = process.env.JWT_SECRET || '70p53cr37';
export const resetDb = process.env.RESET_DB || false;
export const fakedDb = process.env.FAKED_DB
  ? parseInt(process.env.FAKED_DB, 10)
  : 0;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;