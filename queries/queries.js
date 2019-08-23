require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT),
});

const getPopularLocations = (req, res) => {
  pool.query('SELECT * FROM popular_locations', (err, results) => {
    if (err) {
      throw err
    }

    res.status(200).json(results.rows);
  })
}

const getSearchResults = (req, res) => {
  const attraction = req.params.attraction;

  pool.query(`SELECT * FROM attractions WHERE attraction = '${attraction}'`, (err, results) => {
    if (err) {
      throw err
    }

    res.status(200).json(results.rows);
  })
}

module.exports = {
  getPopularLocations,
  getSearchResults
}
