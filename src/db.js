import {DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} from './config.js';
import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});