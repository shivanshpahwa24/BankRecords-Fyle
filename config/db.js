const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config();

const { SQL_DB, SQL_USER, SQL_PASSWORD, SQL_HOST } = process.env;

const db = new Pool({
  user: SQL_USER,
  password: SQL_PASSWORD,
  host: SQL_HOST,
  port: 5432,
  database: SQL_DB,
});

module.exports = db;
