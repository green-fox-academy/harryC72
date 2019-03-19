let test = require('tape');
let request = require('supertest');
const app = require('../routes');
require('dotenv').config();



test('run the hello world-endpoint', function (t) {
  request(app)
    .get('/hello')
    .expect('Hello World!')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});


test('test the /addSoldier-endpoint', function (assert) {
  let newThing = {
    "name": "harryX",
    "health": 25,
    "armour": 44,
    "platoon_name": "red_brigade"
  }
  request(app)
    .post('/addSoldier')
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      let actualThing = res.body;
      assert.error(err, 'No error');
      assert.same(actualThing, newThing);
      assert.end();
    });
});