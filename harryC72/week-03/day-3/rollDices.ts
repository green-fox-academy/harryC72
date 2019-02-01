import { diceSet } from './diceSet'


let rollResult: number = 0;

function RollDices() {

  diceSet.roll();
  rollResult = diceSet.getCurrent(0);
  
  if (rollResult === 6) {
    diceSet.dice.shift();
  }

  while (diceSet.dice.length > 0) {

    diceSet.reroll(0);
    rollResult = diceSet.getCurrent(0);
    console.log(rollResult + 'test');

    if (rollResult === 6) {
      diceSet.dice.shift();

    }
  }
}

RollDices();

