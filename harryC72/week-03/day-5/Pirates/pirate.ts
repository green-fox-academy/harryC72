
// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
//     0 to 4 times, "Pour me anudder!"
//     else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.

import{Counter} from '../../day-3/counter'
import{Weapon} from './weapon'
import{Parrot} from './parrot'
import{ saber} from './weapons'



export class Pirate{
  name: string;
  health: number;
  weapon: Weapon;
  active: boolean;
  dead: boolean;
  drinkCounter = new Counter(); 
  haveParrot: boolean;
  parrot: Parrot;


  constructor(name = 'Bill', health = 20, active = true, dead = false, haveParrot = false){
      this.name = name;
      this.health = health;
      this.weapon = saber;
  }

  drinkSumRum(){
    this.health--
    this.drinkCounter.addOne();
  }

  howItIsGoingMate(){
    this.drinkSumRum && this.drinkCounter.counter<4
    ? console.log('Pour me anudder'):
    null;
    this.drinkSumRum && this.drinkCounter.counter>=4
    ? (console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?"), this.passingOut()):
    null;
  }

  passingOut(){
        this.active = false;

  }

  die(){
    this.health = 0;
    this.active = false;
    this.dead = true;
    console.log()
  }

}

let jim = new Pirate('Jim');

let flintlockPistol = new Weapon('flinklockPistol', 25, 6);

jim.weapon = flintlockPistol;

console.log(jim);
