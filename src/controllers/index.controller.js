import { pool } from '../db.js';

const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "pong" AS result');

    res.send(result);
}

const getIndex = (req, res) => {
    res.send('Bienvenido al inicio');
}

export { ping, getIndex }