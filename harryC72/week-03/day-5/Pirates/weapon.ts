import {Pirate} from './pirate'
import {Rand} from './random'
import { Captain } from './captain'


export class Weapon{
  name: string;
  hitPoints: number;
  weight: number;
  pirate: Pirate;
  captain: Captain;


  constructor(weaponName, hit, weaponWeight){
    this.name = weaponName;
    this.hitPoints = hit;
    this.weight = weaponWeight;
  }

  hit(){
    let hit = Rand.getRandomNumber(this.hitPoints/2, this.hitPoints);
    hit = hit - this.captain.armour.protection;
    this.captain.armour.endurance--;
    if(this.pirate.health <= 0){this.pirate.die};
  }

}