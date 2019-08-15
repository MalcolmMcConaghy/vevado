require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT),
});

const getAttraction = (req, res) => {
  pool.query('SELECT * FROM attractions', (err, results) => {
    if (err) {
      throw err
    }

    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAttraction
}
