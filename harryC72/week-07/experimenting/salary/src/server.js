'use strict'
'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
app.use(express.json());
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()



app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`)
});

const con = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database
});

app.get('/hello', (req, res) => res.send('Hello World!'));


app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + '/static/html/index.html'));
});



app.post('/post', (req, res) => {

    let SQL = `INSERT INTO employee (name, title, salary) VALUES ('${req.body.name}', '${req.body.title}', ${req.body.salary})`;
    con.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      };
        let SQL = `INSERT INTO department (department_name, emp_id) VALUES ('${req.body.department}', ${rows.insertId})`;
  con.query(SQL, (err, rows) => {
    console.log(rows);
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
      res.send(rows);
    })
  });
});

app.get('/:name', jsonParser, (req, res)=> {
  let name = req.params.name;
  let SQL = `SELECT * FROM employee WHERE name = '${name}'`;
  con.query(SQL, (err,rows) => {
  if (err) {
          console.error(err);
          res.status(500).send();
          return;
        };
  res.send(rows);
  // console.log(rows);
  });
  });