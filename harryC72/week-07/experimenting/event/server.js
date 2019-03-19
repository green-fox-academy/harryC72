'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
app.use(express.json());
const path = require('path');


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

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/index', (req, res) =>{
res.sendFile(path.join(__dirname + '/static/views/index.html'));
});


app.post('/index',(req, res) =>{
 const formContent = req.body;

 console.log(formContent);
 res.json(req.body);
res.end();
});