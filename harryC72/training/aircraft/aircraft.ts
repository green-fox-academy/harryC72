'use strict'

export class Aircraft {
  name: string;
  ammo: number;
  maxAmmo: number;
  baseDamage: number;
  damage: number;
  isPriority: boolean;

  constructor(planeName: string, planeMaxAmmo: number, planeBaseDamage: number,
     planePriority: boolean, planeAmmo: number = 0, planeDamage: number = 0){
    this.name = planeName;
    this.maxAmmo = planeMaxAmmo;
    this.baseDamage = planeBaseDamage;
    this.isPriority = planePriority;
    this.ammo = planeAmmo;
    this.damage = planeDamage;
  }

  fight(): number {
    let fightDamage: number = 0;
    fightDamage = this.baseDamage * this.ammo;
    this.ammo = 0;
    this.damage += fightDamage;
     return fightDamage;
  }

  amountToFill(): number{
    return this.maxAmmo - this.ammo;
  }

  refill(ammoFilling: number): number {
    let ammoReturn = 0;
    let amountToFill = 0;

    amountToFill = this.amountToFill();
    if(ammoFilling < amountToFill){
      this.ammo = ammoFilling;
    }else{
      this.ammo = this.maxAmmo;
    }
    ammoReturn = ammoFilling - amountToFill;

    return ammoReturn;
  }

  getType(): string{
    return this.name;
  }

  getStatus(): string{
    return `${this.name}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage inflicted: ${this.damage}`;
  }

  priorityStatus(): boolean{
    return this.isPriority; 
  }
}

