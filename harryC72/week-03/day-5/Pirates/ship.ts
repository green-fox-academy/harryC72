
//     Create a Ship class.
//     The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
//     When a ship is created it doesn't have a crew or a captain.
//     The ship can be filled with pirates and a captain via fillShip() method.
//         Filling the ship with a captain and random number of pirates.
//     Ships should be represented in a nice way on command line including information about
//         captains consumed rum, state (passed out / died)
//         number of alive pirates in the crew
//     Ships should have a method to battle other ships: ship.battle(otherShip)
//         should return true if the actual ship (this) wins
//         the ship should win if its calculated score is higher
//         calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
//         The loser crew has a random number of losses (deaths).
//         The winner captain and crew has a party, including a random number of rum :)

import { Pirate } from './pirate'
import { Rand } from './random'
import { Captain } from './captain';
import { Counter } from '../../day-3/counter';


class PirateShip {
  name: string;
  list_pirate: Pirate[];
  captain: Captain;

  constructor() {
    this.list_pirate = [];
  }

  fillShip() {
    this.list_pirate.push(this.getCaptain());
    this.list_pirate.concat(this.getCrew());
  }

  getCaptain() {
    let randomCaptain = new Captain();
    return randomCaptain;
  }

  getCrew() {
    let crew: Pirate[] = [];
    let crewSize: number = Rand.getRandomNumber(15, 25);

    for (let i: number = 0; i < crewSize; i++) {
      crew.push(new Pirate);
    }
    return crew;
  }


  getShipStatus() {
    console.log(`Status of Ship ${this.name}`);
    console.log(`The captain has consumed ${this.captain.drinkCounter} bottles of rum`);
    if (!this.captain.active && !this.captain.dead) { "The captain is sleeping it off in the officer/'s quarters" };
    if (this.captain.dead) { "The captain is unfortunately dead. Long live the captain!" };
    console.log(`${this.getPercentageAlive}% of the pirate crew are alive`);


  }

  getPercentageAlive() {
    let aliveCrewMembers = new Counter(0);

    this.list_pirate.forEach(function (value) {
      if (!value.dead) { aliveCrewMembers.addOne };
    });

    let result: number = (aliveCrewMembers.counter / this.list_pirate.length) * 100;

    return result;
  }
}

//         Ships should have a method to battle other ships: ship.battle(otherShip)
//         should return true if the actual ship (this) wins
//         the ship should win if its calculated score is higher
//         calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
//         The loser crew has a random number of losses (deaths).
//         The winner captain and crew has a party, including a random number of rum :)

  battle(){
    
  }