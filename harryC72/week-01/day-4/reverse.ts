'use strict'

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

function reverse(num: number[]): number[] {
  let returnArray: number[] = [];

  returnArray = num.reverse();
  
  return returnArray;
}

function reverse2(num: number[]): number[] {
  let returnArray: number[] = [];
  let test: number = 0;
  num.forEach(element => {
    if(element > test){ returnArray.unshift(element) };
  });

  return returnArray;
}

let tempArray: number[] = [3, 4, 5, 6, 7];
console.log(reverse(tempArray));
let tempArray2: number[] = [3, 4, 5, 6, 7];
console.log(reverse2(tempArray2));