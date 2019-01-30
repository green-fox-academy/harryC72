'use strict'

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

// console.log(ticTacResult('win-o.txt'))
// Should print "O"

// console.log(ticTacResult('win-x.txt'))
// Should print "X"

// console.log(ticTacResult('draw.txt'))
// Should print "Draw"


function ticTacResult(fileName: string){

  let fs = require('fs');

  let content = fs.readFileSync(fileName, 'utf8');
  content = content.replace(/(\r\n|\n|\r)/gm, "");
  let tempArray: string[] = content.split('');
  console.log(tempArray);

  let raw1: string[] = tempArray.slice(0,3);
  console.log(raw1);
  let raw2: string[] = tempArray.slice(3, 6);
  console.log(raw2);
  let raw3: string[] = tempArray.slice(6);
  console.log(raw3);


  let array = [[raw1], [raw2], [raw3]];

  // console.log(tempArray);

  for(let i: number = 0; i < array.length; i++)
  {
    if(array[0, 0]==='X' && array[1][0]==='X' && array[2][0] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[0]==='O' && tempArray[1]==='O' && tempArray[2] === 'O')
    {
      console.log('0');
    }
    else if(tempArray[3]==='X' && tempArray[4]==='X' && tempArray[5] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[3]==='O' && tempArray[4]==='O' && tempArray[5] === 'O')
    {
      console.log('O');
    }
    else if(tempArray[6]==='X' && tempArray[7] === 'X' && tempArray[8] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[6]==='O' && tempArray[7] === 'O' && tempArray[8] === 'O')
    {
      console.log('O');
    }
    else if(tempArray[0]==='X' && tempArray[3]=== 'X' && tempArray[6] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[0]==='O' && tempArray[3]=== 'O' && tempArray[6] === 'O')
    {
      console.log('O');
    }
    else if(tempArray[1]==='X' && tempArray[4]=== 'X' && tempArray[7] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[1]==='O' && tempArray[4]=== 'O' && tempArray[7] === 'O')
    {
      console.log('O');
    }
    else if(tempArray[2]==='X' && tempArray[5]=== 'X' && tempArray[8] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[2]==='O' && tempArray[5]=== 'O' && tempArray[8] === 'O')
    {
      console.log('O');
    }
    else if(tempArray[0]==='X' && tempArray[4]=== 'X' && tempArray[8] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[0]==='O' && tempArray[4]=== 'O' && tempArray[8] === 'O')
    {
      console.log('O');
    }
    else if(tempArray[2]==='X' && tempArray[4]=== 'X' && tempArray[6] === 'X')
    {
      console.log('X');
    }
    else if(tempArray[2]==='O' && tempArray[4]=== 'O' && tempArray[6] === 'O')
    {
      console.log('O');
    }
    else{
      console.log('Draw');
    }

  }

    

}

console.log(ticTacResult('win-o.txt'))
// // Should print "O"

// console.log(ticTacResult('win-x.txt'))
// // Should print "X"

// console.log(ticTacResult('draw.txt'))
// // Should print "Draw"
