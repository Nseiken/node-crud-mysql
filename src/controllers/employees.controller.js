import { pool } from '../db.js';

const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.status(200).send(rows);
    } catch (error) {
        res.status(500).send({
            error
        });
    }
}

const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        res.json(rows[0]);
        // res.status(200).send([rows[0]]);
    } catch (error) {
        res.status(500).send({
            error
        });
    }
}

const createEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body;

        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES(?, ?)', [name, salary]);

        res.status(200).send({
            id: rows.insertId,
            name,
            salary
        });
    } catch (error) {
        res.status(500).send({
            error
        });
    }
}

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;

        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        res.status(500).send({
            error
        });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        });

        res.sendStatus(204);
    } catch (error) {
        res.status(500).send({
            error
        });
    }
}

export {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}