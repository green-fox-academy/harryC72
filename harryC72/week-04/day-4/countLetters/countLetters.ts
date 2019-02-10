'use strict'


let alphabet: string[] = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

// Count Letters

// Write a function, that takes a string as an argument and
// returns a dictionary with all letters in the string as keys,
// and numbers as values that shows how many occurrences there are.
// Create a test for that.


function countLetters(inputString: string): any[]{
  let tempArray: string[] = inputString.split('');
  console.log(tempArray);
  
  let counter: number = 0;
  let object: any = {};
  let dictionary: any[] = [];
  let char: string = '';
   
    for(let i: number = 0; i < alphabet.length; i++){

      for(let j: number = 0; j < tempArray.length; j++){
          if(tempArray[j] == alphabet[i]){
            counter++;
            char = alphabet[i];
            
          }
      }
       if(char != ''){
        var key = char;
        object[key] = counter;
        dictionary.push(object);
       }
        
        counter = 0;
        char = '';
        object = {};
    }
    
  return dictionary;
}

console.log(countLetters('hobbie'));