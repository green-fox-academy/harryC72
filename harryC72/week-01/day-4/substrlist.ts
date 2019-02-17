'use strict'


//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list

//  Example
// console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
// console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1

function checkSubString(wordTest: string, stringArray: string[]): number {
  let result: number = 0;

  stringArray.forEach(element => {
     result = element.indexOf(wordTest);
  });

  return result;
}
console.log(checkSubString('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in'] ));
console.log(checkSubString('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
console.log(checkSubString('world', ['hello', 'riworld']));