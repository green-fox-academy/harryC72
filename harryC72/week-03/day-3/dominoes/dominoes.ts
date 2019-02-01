

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

let freshDominoes: Domino[] = [];



function sortDominoes(dominoes: Domino[]) {

  freshDominoes.push(dominoes[0]);
  console.log(freshDominoes);

  let j: number = 0;

  while (j < 2) {


    for (let i: number = 1; i < dominoes.length; i++) {

      if (freshDominoes[j].values[1] === dominoes[i][0]) {
        freshDominoes.push(dominoes[i][0]);
        dominoes.splice(i, 1);
        j++;
      }
      else if (freshDominoes[j].values[1] === dominoes[i][1]) {
        freshDominoes.push(swap(dominoes[i][1]));
        dominoes.splice(i, 1);
        j++;
      }
      else if (freshDominoes[j].values[0] === dominoes[i][0]) {
        freshDominoes.pop();
        freshDominoes.push(swap(dominoes[0]));
        freshDominoes.push(dominoes[i][0]);
        dominoes.splice(i, 1);
        j++;
      }
      else if (freshDominoes[j].values[0] === dominoes[i][1]) {
        freshDominoes.pop();
        freshDominoes.push(swap(dominoes[0]));
        freshDominoes.push(swap(dominoes[i][1]));
        dominoes.splice(i, 1);
        j++;

      }
      console.log(freshDominoes);
      
    }

  }

}

function swap(domino: Domino): Domino {

  let temp1: number = domino.values[0];
  let temp2: number = domino.values[1];

  let returnDomino = new Domino(temp2, temp1);

  return returnDomino;
}

let testDomino: Domino = new Domino(4, 6);

// sortDominoes(dominoes);

dominoes.sort((a, b) => (a.values[0] > b.values[0]) ? 1 : (a.values[0] === b.values[0]) ? ((a.values[1] > b[1]) ? 1 : -1) : -1 );

console.log(dominoes);
