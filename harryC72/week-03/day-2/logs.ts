'use strict'

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


function readLogForIPAdresses(fileName: string): string[] {

  let fs = require('fs');

  let log = fs.readFileSync(fileName, 'utf8');

  let tempArray: string[] = log.split('   ');
  console.log(tempArray);
  let result: string[] = [];

  for (let i: number = 0; i < tempArray.length; i++) {
    let counter: number = 1;
    result.push(tempArray[counter]);
    counter += 3;
  }

  return result;
}


// console.log(readLogForIPAdresses('log.txt'));



function getGetPostRatio(fileName: string) {

  let fs = require('fs');

  let log = fs.readFileSync(fileName, 'utf8');

  let tempArray: string[] = log.split('   ');
  let Post: number = 0;
  let Get: number = 0;

  for (let i: number = 0; i < tempArray.length; i++) {
    
    if (tempArray[i].indexOf('POST') >= 0) {
      console.log(tempArray[i].indexOf('POST'));
        Post++;
    }
    else if (tempArray[i].indexOf('GET') >= 0) {
      console.log(tempArray[i].indexOf('GET'));
        Get++;
    }
  }
  
  console.log(Post);
  console.log(Get);

    let result: number = Get/Post;


  return result;

}

// console.log(readLogForIPAdresses('log.txt'));

console.log(getGetPostRatio('log.txt'));
