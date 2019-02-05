'use strict'

import { Aircraft} from './aircraft'

// F16

//     Max ammo: 8
//     Base damage: 30

export class F16 extends Aircraft{

  constructor(a, f16ma = 8, f16d = 30){
    super(a, f16ma, f16d)
    this.maxAmmo = f16ma;
    this.baseDamage = f16d;
  }

}
