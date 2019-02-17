'use strict'
import { Aircraft } from './aircraft'

class Carrier {
  name: string;
  aircrafts: Aircraft[];
  ammoStorage: number;
  healthPoints: number;
  damage: number;

  constructor(carrierName: string, carrierAmmoStorage: number, carrierHealth: number, carrierDamage: number = 0) {
    this.name = carrierName;
    this.aircrafts = [];
    this.ammoStorage = carrierAmmoStorage;
    this.healthPoints = carrierHealth;
    this.damage = carrierDamage;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): any {
    let ammoToFillWith = this.ammoStorage;
    if (this.ammoStorage == 0) {
      return Error('There is no ammo');
    }

    let totalAmountToFill: number = 0;
    let turnFillingAmount: number = 0;
    let prioAircraftList: Aircraft[] = [];
    this.aircrafts.forEach(plane => {
      totalAmountToFill += plane.amountToFill();
    });

    if (totalAmountToFill > ammoToFillWith) {
      prioAircraftList = this.checkIsPriority();

      prioAircraftList.forEach(plane => {
        turnFillingAmount = plane.refill(ammoToFillWith);
        ammoToFillWith = turnFillingAmount;
        turnFillingAmount = 0;
      });
      this.ammoStorage = 0;
    } else {
      this.aircrafts.forEach(plane => {
        turnFillingAmount = plane.refill(ammoToFillWith);
        ammoToFillWith = turnFillingAmount;
        turnFillingAmount = 0;
      });
      this.ammoStorage = ammoToFillWith;
    }
  }

  checkIsPriority(): Aircraft[] {
    let returnArrayAircrafts: Aircraft[] = [];

    this.aircrafts.forEach(plane => {
      plane.isPriority ? returnArrayAircrafts.unshift(plane) : returnArrayAircrafts.push(plane);
    });

    return returnArrayAircrafts;
  }

  fight(carrier: Carrier): void {
    if(carrier.healthPoints == 0){
      console.log('Your are fighting a dead ship');
      return; 
    }
    let fightResult: number = 0;
    let totalDamageInflicted: number = 0;

    this.aircrafts.forEach(plane => {
      totalDamageInflicted += plane.fight();
    });
    this.damage = totalDamageInflicted;
    fightResult = carrier.healthPoints - totalDamageInflicted;
    if (fightResult < 0) {
      carrier.healthPoints = 0;
    } else {
      carrier.healthPoints = fightResult;
    } 
  }
  getStatus(): string {
    let resultString: string = '';
    if (this.healthPoints == 0) {
      return resultString = `It's dead Jim :(`;
    } else {
      let carrierStatus: string = `${this.name} \r\n HP: ${this.healthPoints}, Aircraft count: ${this.aircrafts.length}, 
    Ammo Storage: ${this.ammoStorage}, Total damage: ${this.damage}`
      this.aircrafts.forEach(plane => {
        resultString += `Type ${plane.name}, Ammo: ${plane.ammo}, Base Damage: ${plane.baseDamage}, All Damage: ${plane.damage} \r\n`;
      });

      resultString = carrierStatus + '\r\n' + resultString;
      return resultString;
    }
  }
}


let carrier2: Carrier = new Carrier('Bismark',5000, 2300);
let F35: Aircraft = new Aircraft('F35', 12, 50, true);
carrier2.add(F35);
carrier2.add(new Aircraft('F35', 12, 50, true));
carrier2.add(new Aircraft('F35', 12, 50, true));
carrier2.add(new Aircraft('F16', 8, 30, false));
carrier2.add(new Aircraft('F16', 8, 30, false));
console.log('Bismark first status', carrier2.getStatus());
carrier2.fill();
console.log('Bismark second status', carrier2.getStatus());

let enemyCarrier2: Carrier = new Carrier('Flora', 4000, 2000);
enemyCarrier2.add(new Aircraft('F35', 12, 50, true));
enemyCarrier2.add(new Aircraft('F35', 12, 50, true));
enemyCarrier2.add(new Aircraft('F35', 12, 50, true));
enemyCarrier2.add(new Aircraft('F16', 8, 30, false));
enemyCarrier2.add(new Aircraft('F16', 8, 30, false));
enemyCarrier2.add(new Aircraft('F16', 8, 30, false));
enemyCarrier2.fill();
console.log('Flora first status', enemyCarrier2.getStatus());
carrier2.fight(enemyCarrier2);
console.log('Bismark after the fight', carrier2.getStatus());
console.log(`Flora's status`, enemyCarrier2.getStatus());
if(enemyCarrier2.healthPoints > 0){
  enemyCarrier2.fight(carrier2);
}else{
  console.log(carrier2.getStatus());
  console.log(enemyCarrier2.getStatus());
}

