'use strict'

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];


function matching(array1: string[], array2: string[]): string[] {

  var result: string[] = array1.reduce(function(arr, valueArray1, i) {
    return arr.concat(valueArray1, array2[i]); 
 }, []);

  return result;
};

console.log(matching(girls, boys));



