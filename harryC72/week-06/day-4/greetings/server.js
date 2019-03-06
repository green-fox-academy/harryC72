const express = require('express');
const app = express();

var error = ejsLint(text, options);
console.log(error);

const PORT = 3000;
const path = require('path');

app.listen(PORT,() => {
  console.log(`server is running at ${ PORT }`);
});

app.set('view engine', 'ejs');


app.get('/', function(req, res) {

    res.render('home', { query: req.query.name });

});