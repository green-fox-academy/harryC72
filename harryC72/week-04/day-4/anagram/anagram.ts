'use strict'

let alphabet: any = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

export let isAnagram = (input1: string, input2: string): boolean => {

  try{
  let tempArray: string[] = input1.split('');
  let tempArray2: string[] = input2.split('');

  if (!(input1.length === input2.length)) {
    return false;
  } else if (checkContainSameLetters(tempArray, tempArray2)) {
    return true;
  } else {
    return false;
  }
}
catch(Error){
  return Error;
}
}

let checkContainSameLetters =
  (inputArray: string[], inputArray2: string[]): boolean => {
    let counter1: number = 0;
    let counter2: number = 0;

    inputArray.forEach((char, i) => {
      if (char == alphabet[i]) { counter1 += i };
    });
    inputArray2.forEach((char, i) => {
      if (char == alphabet[i]) { counter2 += i };
    });

    return (counter1 == counter2) ? true : false;

  }

console.log(isAnagram('are', 'ear'));
console.log(isAnagram('revolver', 'car'));

