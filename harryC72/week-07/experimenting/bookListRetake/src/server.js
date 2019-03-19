'use strict'

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
app.use(express.json());
const path = require('path');


app.use('/static', express.static('static'));
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`)
});

const con = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
});

app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/booklistAPI', (req, res)=> {
  let SQL = `SELECT author_name, title
  FROM book
  LEFT JOIN author 
  ON author.author_id = book.author_id`;
  con.query(SQL, (err,rows) => {
  if(err) throw err;
  
  res.send(rows);
  console.log(rows);
  });
  });

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/views/index.html'));
});

app.post('/index', urlencodedParser, (req, res) => {
  let SQL = `INSERT INTO author (author_name) VALUES ("${req.body.name}")`;

  con.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    } else {
      console.log(rows.insertId);
      const authorId = rows.insertId;

      SQL = `INSERT INTO book (author_id) VALUES (${authorId})`;
      con.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
          
        
        SQL = `INSERT INTO book (title, author_id) VALUES ("${req.body.title}", ${authorId})`;
        con.query(SQL, (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500).send();
            return;
          }
        })
        res.send(rows);
      })
    }
  });
});