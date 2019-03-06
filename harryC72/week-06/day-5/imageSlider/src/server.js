const db = require('./database')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const path = require('path');


app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(PORT, () => {
  console.log(`server is running at ${ PORT}`);
});

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


app.get('/sharks')

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "harryxenon",
  password: "loom55",
  database: "sharkie"
});

 let insertOne = (sharkName) => {
  con.query('INSERT INTO Shark SET ?',
  sharkName, (err, res) => {
    if(err) throw err;

    console.log('Last insert ID:', res.insertId);
  });
}

let getInfo = (callback) {
  var sql ='SELECT * FROM Shark'
}
