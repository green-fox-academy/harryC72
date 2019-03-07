'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json());

const con = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database
});

let SQL = `select aut_name, book_name 
from author 
inner join book_mast
on aut_id`;

app.get('/booklist', (req,res) => {
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    console.log(rows);
  });
});

