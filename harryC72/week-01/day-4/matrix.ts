'use strict'

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let testArray: number[] = [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0];
let newArray: number[][] = [];
let innerArray: number[] = [];
let counter: number = 0;

  for (let i: number = 0; i < 4; i++) {
    innerArray = [];
    for (let j: number = 0; j < 4; j++) {
      innerArray.push(testArray[counter++]);
    }
    newArray.push(innerArray);
  }

console.log(newArray);





