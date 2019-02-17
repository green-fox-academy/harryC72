'use strict'

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(numbers: number[], input: boolean ): number[] {
  let returnArray: number[] = [];

  if(input == false){
    returnArray = numbers.sort(function(a: number, b: number): number {
    return a - b;
    });

    return returnArray;

  }else{
    returnArray = numbers.sort(function(a: number, b: number): number{
    return a + b; 
    })
  return returnArray;
  }
}

let array: number[] = [34, 12, 24, 9, 5];

console.log(bubble(array, false));
console.log(bubble(array, true));

