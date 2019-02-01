
import { Pirate } from './pirate'
import { Weapon } from './weapon'
import { flintlockPistol, saber} from './weapons'
import { Armour } from './armour'

export class Captain extends Pirate {

  weapon2: Weapon;
  armour: Armour;

  constructor(name = 'James'){ 

    super(name)
    this.name = name;
    this.weapon2 = flintlockPistol;

  }

}
