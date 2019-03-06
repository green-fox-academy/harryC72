const express = require('express');
const app = express();

const PORT = 3000;
const path = require('path');

app.listen(PORT, () =>{
  console.log(`server is running at ${ PORT }`);
});

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  const todos = [
    'get up',
    'survive',
    'go back to bed'
  ];

  res.render('todo', {todos});
});