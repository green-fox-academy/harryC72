'use strict';

const dotenv = require('dotenv');
const mysql = require('mysql');

let con = null;

dotenv.config();

try {
  con = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database
  });

  console.log(`Database connection to ${process.env.DB_database} was successful`);
} catch (e) {
  console.log(`Database connection to ${process.env.DB_database} has failed`);
  console.error(e);
}

module.exports = { con };

