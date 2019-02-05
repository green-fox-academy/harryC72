'use strict'
// F35

//     Max ammo: 12
//     Base damage: 50

import { Aircraft} from './aircraft'


export class F35 extends Aircraft{

  constructor(a, f35ma = 12, f35bd = 50){
    super(a, f35ma, f35bd)
    this.maxAmmo = f35ma;
    this.baseDamage = f35bd;
  }

}