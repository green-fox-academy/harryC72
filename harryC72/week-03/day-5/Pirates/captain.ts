
import * as weapons from './weapons'
import { Weapon } from './weapon';
import { Armour} from './armour'
import { Pirate } from './pirate'



export class Captain extends Pirate {

  weapon2: Weapon;
  armour: Armour;

  constructor(name = 'James'){ 

    super(name)
    this.name = name;
    this.weapon2 = weapons.flintlockPistol;

  }

}
