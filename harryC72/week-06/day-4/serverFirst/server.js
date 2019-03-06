
const express = require('express');
const app = express();

const PORT = 3000;
const path = require('path');

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});