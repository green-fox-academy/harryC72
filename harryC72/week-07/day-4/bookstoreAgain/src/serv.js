'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
app.use(express.json());
const path = require('path');

app.set('view engine', 'ejs');

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

let SQL = `select aut_name, book_name,
 cate_descrip, pub_name, book_price
from book_mast
left join author
on author.aut_id = book_mast.aut_id

left join category
on book_mast.cate_id = category.cate_id

left join publisher 
on book_mast.pub_id = publisher.pub_id

`;

app.get('/booklistAPI', (req, res)=> {
con.query(SQL, (err,rows) => {
    if(err) throw err;

    res.send(rows);
    console.log(rows);
  });
});

app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/static/index.html'));
});