'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));


const con = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
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

app.get('/booklist', (req,res) => {
  con.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.render('index', {data: rows});
    console.log(rows);

  });
});
