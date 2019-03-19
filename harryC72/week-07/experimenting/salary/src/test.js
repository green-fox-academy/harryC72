

const request = require('supertest');
const express = require('express');
 
const app = express();
 
 
request(app)
  .get('/Harry')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '60')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });