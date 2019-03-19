'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
const path = require('path');

const database = require('./database');

const con = database.con;

module.exports = app;

let SQL = '';

app.use('/static', express.static('static'));

app.get('/hello', (req, res) => res.send('Hello World!'));

app.post('/addSoldier', (req, res) =>{
  SQL = `INSERT INTO soldier (name, health, armour) 
  VALUES (?,?,?)`;
  con.query(SQL, [req.body.name, req.body.health, req.body.armour] , (err, rows) =>{
    console.log(rows);
    if(err){
      console.error(err);
      res.status(500).send();
      return;
    }
    SQL =`INSERT INTO platoon (sold_id, platoon_name) VALUES (?,?)`;
    con.query(SQL, [rows.insertId, req.body.platoon_name], (err, rows) =>{
      if(err){
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    })
  }) 
})

app.get('/soldiers', (req, res) =>{
 SQL = `SELECT name, health, armour, platoon_name FROM soldier LEFT JOIN platoon ON soldier.sold_id = platoon.sold_id`;
 con.query(SQL, (err, rows) => {
   if(err){
     console.error(err);
     res.status(500).send();
     return;
   }
  
   res.send(rows);
   console.log(rows);
 })
})

