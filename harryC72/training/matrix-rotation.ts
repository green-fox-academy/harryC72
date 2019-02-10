'use strict';

// Create a function named `rotateMatrix` that takes an n×n integer matrix (array of arrays) as parameter
// and returns a matrix which elements are rotated 90 degrees clockwise.

// const matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// console.log(rotateMatrix(matrix));
// should print (in one line):
// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] ]

function rotateMatrix(matrix: number[][]): number[][]{
let newArray1: number[] = [];
let newArray2: number[][] = [];
let newArray3: number[][] = [];
for(let i: number = 0; i < matrix.length; i++){
  for(let j: number = matrix.length - 1; j >= 0; j--){
    {
    newArray1.push(matrix[j][i]); 
  }

  }
  newArray2.push(newArray1);

  newArray1 = [];

}
return newArray2;

}

const matrix2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateMatrix(matrix2));


