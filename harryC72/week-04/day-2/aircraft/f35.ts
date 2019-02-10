'use strict'

import { Aircraft} from './aircraft'


export class F35 extends Aircraft{

  constructor(f35Ammo, f35MaxAmmo = 12, f35BaseDamage = 50, f35Damage = 0, f35Type = 'F35'){
    super(f35Ammo, f35MaxAmmo, f35BaseDamage, f35Damage, f35Type)
    this.ammo = f35Ammo;
    this.maxAmmo = f35MaxAmmo;
    this.baseDamage = f35BaseDamage;
    this.damage = f35Damage
    this.type = f35Type;
  }

}