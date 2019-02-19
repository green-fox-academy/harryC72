'use strict'

import { AverageRating } from './averageRating'

function readFile(filePath: string): string[] {
  let returnArray: string[] = [];

  const fs = require('fs');

  let content = fs.readFileSync(filePath, 'utf-8');
  returnArray = content.split('\n');

  return returnArray;
}


function createTwoDimensionalArray(inputArray: string[]): number[][] {
  let singleArray: string[] = inputArray;
  let singleArray2: string[] = [];
  let numberArray: number[] = [];
  let twoDimensionalArray: number[][] = [];

  for (let i: number = 0; i < singleArray.length; i++) {
    singleArray2 = singleArray[i].split(' ');
    console.log('singleArray2', singleArray2);
    
    for (let j: number = 0; j < singleArray2.length; j++) {
      numberArray.push(parseInt(singleArray2[j]));
    }
    twoDimensionalArray.push(numberArray);
    numberArray = [];
  }
  return twoDimensionalArray;

}

// m = matReview p = presSkills h = helpfulness e = explanation

// m p h e
// 1 3 5 3   // this line is an answer from an apprenitce
// 2 3 4 3   // this is another response



function getAverageRating(filePath: string): AverageRating {
  let averageRating = new AverageRating();
  let m: number = 0;
  let p: number = 0;
  let h: number = 0;
  let e: number = 0;
  let ratingArray: number[][] = createTwoDimensionalArray(readFile(filePath));

  for(let i: number = 0; i <ratingArray.length; i++){
    for(let j: number = 0; j < ratingArray.length; j++){let stringArray: string[] = readFile('exe2.txt');

      if(i == 0){let stringArray: string[] = readFile('exe2.txt');

        m += ratingArray[j][i];
      }else if(i == 1){let stringArray: string[] = readFile('exe2.txt');

        p += ratingArray[j][i];
      }else if(i == 2){
        h += ratingArray[j][i];
      }else if(i == 3){
        e += ratingArray[j][i];
      }
    }
  }

  averageRating = calculateAverages(m, p, h, e, ratingArray.length);

  return averageRating; 
}

function calculateAverages(m: number, p: number, h: number, e: number,
    numberToDivideWith: number): AverageRating{
  let averageRating = new AverageRating();
  averageRating.matReview = m / numberToDivideWith;
  averageRating.pressSkills = p / numberToDivideWith;
  averageRating.helpfullness = h / numberToDivideWith;
  averageRating.explanations = e / numberToDivideWith;

  return averageRating;
};


// let stringArray: string[] = readFile('exe2.txt');

console.log(getAverageRating('exe2.txt'));


