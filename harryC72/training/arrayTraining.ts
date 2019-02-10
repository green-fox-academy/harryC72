'use strict'

// Array.slice(from, to);

let trainingArray: string[] = ['what', 'is', 'the', 'cause'];

let result: string[] = trainingArray.slice(1, 2);
console.log(result.toString());

// Array.splice(from index, number of items removed, items to add - optional)
// The splice method can start with a minus and will then start counting 
// from the back of the array

// Array.indexOf(item, from), Array.lastIndexOf(item, from) looks from
// the right to left. Array.includes(item, from) looks for item starting from,
// returns true if found

// Array.filter(callbackFunction) Returns an array. 

let words: string[] = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result3: string[] = words.filter(word => word.length > 6);

console.log(result3);

let names: string[] = ['Harry', 'Sven', 'John', 'Bertil'];

const result4: string[] = names.filter(function(element){
   return element == 'Harry '|| element == 'Sven';
});

console.log(result4); 

function returnFirstAndLast(item, array){
  
 return item[0] + item[array.lenght - 1];
}

names.filter(returnFirstAndLast, names);

console.log('first and last ' + names);


// The Array.map method takes a callback method. It calls the function for each
// element anc returns the array of result. 

let testArrayString: string[] = ['Jacob', 'Walter', 'Steve', 'Walter'];

let resultArray: string[] = testArrayString.map(ifName);

function ifName(item): string{
   let result: string = '';
   if(item == 'Walter'){
       return item + ' Scott';
   }
}
resultArray = resultArray.filter(item => item == 'Walter Scott');

console.log(resultArray);

// The Array.Sort(callbackFunction) 




let domino: number[][] = [[1, 2], [6, 4], [2, 6]];

function sortFunction(a, b) {
   if (a[0] === b[0]) {
       return 0;
   }
   else {
       return (a[0] < b[0]) ? -1 : 1;
   }
}
domino.sort(sortFunction);

console.log(domino);


