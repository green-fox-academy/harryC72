'use strict'

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFile(copyFromFile: string, copyToFile: string) {
  var fs = require('fs');
  try {
    var content: string = fs.readFileSync(copyFromFile, 'utf8');

    fs.writeFileSync(copyToFile, content);
    
    if(copyToFile)
    {
      return true;
    }
    else {
      throw new Error;
    }
  }
  catch (Error) {
    return false;
  }

}


console.log(copyFile('myEgo.txt', 'hereWeGo.txt'));
