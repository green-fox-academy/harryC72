'use strict'


// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');

function readFile(file: string){

  try{
    var result = fs.readFileSync(file, 'utf8');
    if(result)
    {
      console.log(result);
    }
    else{
      throw "file is empty";
      
    }
  }
  catch(error){
    
    console.log('Following error occured ' + error.message);

  }
  
}

readFile("my-file.txt");