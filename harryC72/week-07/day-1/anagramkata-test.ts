import { getPossibleWords, anagramCheck, getAllPermutations } from './anagramkata';


const fs = require('fs');
const test = require('tape');




let fileContent = fs.readFileSync('testPossible.txt', 'utf-8');
let allWordsArray = fileContent.trim()
.split('\n');
let permutations = [
  'den', 'dne' ,'edn' ,'nde' ,'ned', 'end' 
];
let possibleWords = [
'end'
]

test('checks if external file is read completely', function(t) {
const actual= getPossibleWords('testPossible.txt');
console.log(actual);
 t.deepEqual(actual, allWordsArray);
 t.end();
});


test('checks if word(s) is included in the external file', function(t) {

 t.equal(allWordsArray.includes(anagramCheck(permutations, possibleWords)[0]), true);
 t.end();
});