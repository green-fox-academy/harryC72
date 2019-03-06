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


app.get('/doubling', (req, res) => {
  var input = req.query.input;
  var result = input * 2;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 'recieved': input, 'result': result }));
});

app.get('/greeter', (req, res) => {
  name = req.query.name;
  title = req.query.title;
  if (name == undefined && title == undefined) {
    error = 'Please provide a name and a title!';
  } else if (name == undefined) {
    error = 'Please provide a name!';
  } else if (title == undefined) {
    error = 'Please provide a title!';
  }
  let message = `Oh, hi there ${name}, my dear ${title}!`;

  res.setHeader('Content-Type', 'application/json');
  if (error) {
    res.json({ 'error': error });
  } else {
    res.json({ 'welcome_message': message });
  }
});

app.get('/appenda/:appendable', (req, res) => {

  res.setHeader('Content-Type', 'application/json');
  if (req.params.appendable == undefined) {
    res.status(404).end();
  } else {
    res.json({ "appended": req.params.appendable + 'a' });
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

var sum = (n) => (n * (n + 1)) / 2;

app.post('/dountil/:math', (req, res) => {

  let number = req.body.until;
  let returnNum = 0;

  if (req.params.math == 'sum') {
    returnNum = sum(number);
  } else if (req.params.math == 'factor') {
    returnNum = factorialize(number);
  }

  res.setHeader('Content-Type', 'application/json');
  if (number == undefined) {
    res.json({ "error": "Please provide a number!" });
  } else {
    res.json({ "result": returnNum });
  }
});

app.post('/arrays', (req, res) => {
  let operationType = req.body.what;
  let numArray = req.body.numbers;
  let result = 0;
  if (operationType == 'sum') {
    result = numArray.reduce((a, b) => a + b);
  } else if (operationType == 'multiply') {
    result = numArray.reduce((a, b) => a * b);
    console.log('multiply', result);
  } else if (operationType == 'double') {
    result = numArray.map(num => num * 2);
    console.log('double', result);
  }

  res.setHeader('Content-Type', 'application/json');
  if (operationType == undefined && numArray == undefined) {
    res.json({ "error": "Please provide type of operation and numbers" });
  }
  else if (operationType == undefined) {
    res.json({ "error": "Please provide what to do with the number!" });
  } else if (numArray == undefined) {
    res.json({ "error": "Please provide numbers!" });
  } else {
    res.json({ "result": result });
  }
});

app.post('/sith', (req, res) => {
  let inputText = req.body.text;
  let resultText = bigSwapper(inputText);

  res.setHeader('Content-Type', 'application/json');

  if(inputText == undefined)
  {
    res.json({"error": "Feed me some text you have to, padawan young you are. Hmmm."});
  }else{
    res.json({"sith_text": resultText});
  }
});




let makeSentenceArray = (inputText) => {
  return inputText.split('.');
}

let takeAwayEndWord = (inputStringArray) => {
  let remainingSentArray = [];
  let lastWordArray = [];
  let remainingSent = '';
  let lastWord = '';
  let lastIndex = 0;
  inputStringArray.forEach(sentence => {
    lastIndex = sentence.lastIndexOf(" ");
    remainingSent = sentence.substring(0, lastIndex);
    remainingSent = remainingSent.toLowerCase();
    lastWord = sentence.slice(lastIndex);
    lastWord = lastWord.toLowerCase();
    remainingSentArray.push(remainingSent);
    lastWordArray.push(lastWord);
    lastIndex = 0;
    remainingSent = '';
    lastWord = '';
  });
  return [remainingSentArray, lastWordArray];
}

let checkForI =(inputArray) =>{
  let index = 0;
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] == 'i'){
      index = i;
      inputArray.splice(index, 1, 'I');
    }
  }
  return inputArray;
}


let swap = (inputArray) => {
  let wordArray = [];
  let oddWord = '';
  let returnArray = [];
  let returnSentence = '';
  for(let i = 0; i < inputArray.length; i++){
    wordArray = inputArray[i].trim().split(' ');
    wordArray = checkForI(wordArray);
    if(!(wordArray.length%2 == 0)){
      oddWord = wordArray[wordArray.length - 1];
      wordArray.pop();
    }
    wordArray = swapper(wordArray);

    if(!(oddWord == '')){
          wordArray.push(oddWord);
    }
    wordArray[0] = wordArray[0].charAt(0).toUpperCase() + wordArray[0].slice(1).toLowerCase();
    returnSentence = wordArray.join(' ');
    returnArray.push(returnSentence);
    wordArray = [];
    testIfOdd = [];
    oddWord = '';
  }
 return returnArray;
}

let swapper = (inputWordArray) => {
  let even = [];
  let odd = [];
  let newArray = [];

  for(let i = 0; i < inputWordArray.length; i+=2){
    even.push(inputWordArray[i]);
  }
  for(let j = 1; j <= inputWordArray.length; j+=2){
    odd.push(inputWordArray[j]);
  }
   for(let ii = 0; ii < odd.length ; ii++){
     newArray.push(odd[ii]);
     newArray.push(even[ii]);
   }

  return newArray;
}


let getRandomNumber = (min, max) => {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

let wordGenerator = () =>{
  let nr = getRandomNumber(0, 3);
  let randWord = [
    'Arrgh. ',
    'Uhmm. ',
    'Err..',
    'err. err. '
  ];
  return randWord[nr]; 
}

let getRandomWord = () => {
  let nr = getRandomNumber(1, 2);
  let nr2 = getRandomNumber(1, 2);
  let words = '';
  let returnArray = [];
  let counter = 1;
  while(counter <= nr){
    words += wordGenerator();
    console.log('words', words);
    counter++;
  }
  returnArray.push(words);
  words = '';
  counter = 1;
  while(counter <= nr){
    words += wordGenerator();
    counter++;
  }
  returnArray.push(words);
  return returnArray;
}


let bigSwapper = (inputText) => {
  let returnArray = [];
  let firstSentenceArray = makeSentenceArray(inputText);
  let multiArray = (takeAwayEndWord(firstSentenceArray));
  let remainingSentArray = multiArray[0];
  let lastWordArray = multiArray[1];
  returnArray= swap(remainingSentArray);
  let rand = getRandomWord();
  let returnSentence = "";
  for(let i = 0; i < returnArray.length; i++){
    returnSentence += returnArray[i] + lastWordArray[i] +  '. ' + rand[i];
  }
  return returnSentence;
}


// let testText = 'I was lost in the dark. But now I can see';
// // let wordArray = ['I', 'was', 'lost', 'in', 'the', 'dark'];
// // let sentArray = ['I was lost in the dark', 'But now I can see'];




// // // console.log(bigSwapper(testText))
// console.log(bigSwapper(testText));
