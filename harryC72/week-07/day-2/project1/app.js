const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
var http = require('http');
app.use(express.json());


app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`server is runnig at ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/doubling', (req, res) =>{
  var input = req.query.input;
  var result = input * 2;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 'recieved': input, 'result': result}));
});

app.get('/greeter', (req, res) => {
  name = req.query.name;
  title = req.query.title;
  if(name == undefined && title == undefined){
   error = 'Please provide a name and a title!';
  }else if(name == undefined){
    error = 'Please provide a name!';
  }else if(title == undefined){
    error = 'Please provide a title!';
  }
  let message = `Oh, hi there ${name}, my dear ${title}!`;

  res.setHeader('Content-Type', 'application/json');
  if(error){
    res.json({'error': error});
  }else{
    res.json({'welcome_message': message});
  }
});

app.get('/appenda/:appendable', (req, res) => {
 
  res.setHeader('Content-Type', 'application/json');
  if(req.params.appendable == undefined){
    res.status(404).end();
  }else{
    res.json({"appended": req.params.appendable + 'a' });
  }
});



function factorialize(num) {
  var result = num;
   
  if (num === 0 || num === 1) 
    return 1; 
 
  while (num > 1) { 
    num--; 
    result = result * num;  
    
  }
     
  return result; 
}

var sum = (n) => (n * (n+1)) / 2;

app.post('/dountil/:math', (req, res) =>{

  let number = req.body.until;
  let returnNum = 0;

  if(req.params.math == 'sum'){
    returnNum = sum(number);
  }else if(req.params.math == 'factor'){
    returnNum = factorialize(number);
  }

  res.setHeader('Content-Type', 'application/json');
  if(number == undefined){
    res.json({"error": "Please provide a number!"});
  }else{
    res.json({"result": returnNum});
  }
});

app.post('/arrays', (req, res) => {
  let operationType = req.body.what;
  let numArray = req.body.numbers;
  let result = 0;
  if(operationType == 'sum'){
    result = numArray.reduce((a, b) => a + b);
  }else if(operationType == 'multiply'){
    result = numArray.reduce( (a,b) => a * b );
    console.log('multiply', result);
  }else if(operationType == 'double'){
    result = numArray.map(num => num*2);
    console.log('double', result);
  }

  res.setHeader('Content-Type', 'application/json');
  if(operationType == undefined && numArray == undefined){
    res.json({"error": "Please provide type of operation and numbers"});
  }
  else if(operationType == undefined){
    res.json({"error": "Please provide what to do with the number!"});
  }else if(numArray == undefined){
    res.json({"error":"Please provide numbers!"});
  }else{
    res.json({"result": result});
  }
});

app.post('/sith', (req, res) => {
  let inputText = req.body.text;

  let sentenceArray = inputText.split('.');
  let endWordArray = [];
  let endword = '';
  let lastIndex = 0;
  workArray.forEach(sentence => {
    lastIndex = sentence.lastIndexOf(" ");
     endword = sentence.substring(0, lastIndex);
     sentence.remove(lastIndex);
     endWordArray.push(endword);
     lastIndex = 0;
     endword = '';
  });
})

