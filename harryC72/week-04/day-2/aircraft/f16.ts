'use strict'

import { Aircraft} from './aircraft'

// F16

//     Max ammo: 8
//     Base damage: 30

export class F16 extends Aircraft{

  constructor(f16Ammo, f16MaxAmmo = 8, f16BaseDamage = 30, f16Damage = 0, f16Type = 'F16' ){
    super(f16Ammo, f16MaxAmmo, f16BaseDamage, f16Damage, f16Type)
    this.ammo = f16Ammo;
    this.maxAmmo = f16MaxAmmo;
    this.baseDamage = f16BaseDamage;
    this.type = f16Type;
  }
}

let harrys = new F16(6);
let damage = harrys.fight();
console.log(damage);
console.log(harrys.ammo);
