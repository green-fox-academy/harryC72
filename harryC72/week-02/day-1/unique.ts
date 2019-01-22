'use strict'

let array: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

// usage example:
var unique = array.filter( onlyUnique );

console.log(unique);
