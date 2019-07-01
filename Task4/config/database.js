const mysql = require('mysql2');
const {
  DB_URL,
  DB_USER,
  DB_NAME,
  DB_PASSWORD
} = require('./config');

const pool = mysql.createConnection({
  host: DB_URL,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD
});

module.exports = pool.promise();