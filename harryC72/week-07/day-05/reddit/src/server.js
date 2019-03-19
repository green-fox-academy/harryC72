'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.json());
const path = require('path');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extends: false}));
app.use(expressValidator());
app.use(expressSession({secret: 'haraldo', saveUninitialized: false, resave: false}));
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

app.get('/reddit',function(req,res){

  res.sendFile(path.join(__dirname + '/static/views/reddit.html'));
  });


app.get('/reddit/posts', (req, res) => {
  console.log(req.headers);
  let SQL = "SELECT * FROM redditPosts";
  if (!(req.headers == 0 || req.header.user_name == null)) {
    let SQL = `SELECT user_name 
    FROM redditPosts
    LEFT JOIN redditUser
    ON redditPosts.user_id = redditUser.user_id
    SELECT * FROM redditPosts WHERE
    ${req.headers.Username} = user_name
    "`
  } else {
    let SQL = "SELECT * FROM redditPost";

  }
  con.query(SQL, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    console.log(rows);
  });
});


app.post('/reddit/posts', (req, res) => {
  let SQL = '';
  if (!(req.headers == 0 || req.header.user_name == null)) {
    SQL = `SELECT user_id FROM
    redditUser
    LEFT JOIN redditPosts
    ON ${req.body.user_name} = redditUser.user_name
    INSERT INTO redditPosts (user_id) VALUES (redditUser.user_id)
    INSERT INTO redditPosts (title, url) VALUES
    ('${req.body.title}', '${req.body.url}')`
  } else {
    SQL = `INSERT INTO redditPosts (title, url) VALUES ('${req.body.title}', '${req.body.url}')`;
  }
  con.query(SQL, (err, rows) => {
    console.log(rows);
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    SQL = `SELECT * FROM redditPosts WHERE post_id = ${rows.insertId}`
    con.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      };
      res.send(rows);
    })
  });
});

app.put('/reddit/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  let SQL = `UPDATE redditPosts SET score = score + 1 where post_id = ${id}`;
  con.query(SQL, (err, rows) => {
    console.log(rows);
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    con.query(`select * from redditPosts where post_id = ${id}`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    });
  });
});

app.put('/reddit/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  let SQL = `UPDATE redditPosts SET score = score - 1 WHERE post_id = ${id}`;
  con.query(SQL, (err, rows) => {
    console.log(rows);
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }

    con.query(`SELECT * FROM redditPosts WHERE post_id = ${id}`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    });
  });
});
