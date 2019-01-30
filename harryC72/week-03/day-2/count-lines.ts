'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.



function countLines(fileName: string): number {
  try{
    let fs = require('fs');
    let result: number = undefined;

    let content = fs.readFileSync(fileName, 'utf8');
    if(content)
    {
      let tempArray: string[] = content.split('.');
      result = tempArray.length;
      return result;
    }
    else{
      throw new Error;
    }
    
  }
  catch(Error){
    return 0;
  }
  finally{

  }
}
  
console.log(countLines('myText.txt'));


