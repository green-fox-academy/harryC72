
'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
let tempArr: string[] = [];

// console.log(appendA(far));

// // The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

// export = appendA;

function appendA(arr: string[]): string[] {

     arr.forEach(element => {
    element += 'a';
    tempArr.push(element);
  });
    return tempArr;
}

console.log(appendA(far));
