

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
    console.log(wordArray);
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


let testText = 'I was lost in the dark. But now I can see';
let wordArray = ['I', 'was', 'lost', 'in', 'the', 'dark'];
let sentArray = ['I was lost in the dark', 'But now I can see'];




console.log(bigSwapper(testText))
console.log(bigSwapper(testText));
