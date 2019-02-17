'use strict'


//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

function unique(arr: number[]): number[] {

  return arr.filter(function(element, index, array) {
    console.log(element, index, array);
    console.log(array.indexOf(element));
    
    return array.indexOf(element) == index;
  });
}

let testArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

console.log(unique(testArray));