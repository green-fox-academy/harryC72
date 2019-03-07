
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const path = require('path');
require('dotenv').config();
app.listen(PORT, () => {
  console.log(`server is running at ${ PORT}`);
}); //CALLBACK 

var mysql = require('mysql');
const db = require('./database');

var con = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database
});

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/storeShark', (req, res) =>{
  res.render('storeShark', {shark:req.query});
});

app.post('/storeShark', urlencodedParser, (req, res) =>{
  insertOne(req.body);
  console.log(req.body);
  res.render('successfully-stored', {data:req.body});
});

let insertOne = (sharkName) => {
  con.query('INSERT INTO Shark SET ?',
  sharkName, (err, res) => {
    if(err) throw err;

    console.log('Last insert ID:', res.insertId);
  });
}



app.get('/sharks', (req
  , res) => {
  con.query('SELECT * FROM Shark', (err, rows) =>{
    if(err) throw err;
    res.render('sharks', { data: rows});
  });
});


