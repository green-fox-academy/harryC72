'use strict'
import { F35 } from './f35'
import { F16 } from './f16'
import { Aircraft } from './aircraft';

class Carrier {
  listOfAircraft: Aircraft[];
  ammoStorage: number;
  healthPoint: number;
  damage: number;

  constructor(as: number = 500, h: number = 500) {
    this.listOfAircraft = [];
    this.ammoStorage = as;
    this.healthPoint = h;
  }

  add(airCraft: Aircraft){
    this.listOfAircraft.push(airCraft);
  }


  fill() {

    if (this.ammoStorage === 0) {
      throw new Error('There is no ammo in the storage!');
    }

    let test: number = 0;
    let prioArray: Aircraft[] = [];
    this.listOfAircraft.forEach(element => {
      test += element.ammo;
      console.log(test);
      
    });

    if (test > this.ammoStorage) {
      this.listOfAircraft.forEach(element => {
        if (element.isPriority()) {
          prioArray.unshift(element);
        }
        else {
          prioArray.push(element);
        }
      });
      prioArray.forEach(aircraft => {
        this.ammoStorage = aircraft.refill(this.ammoStorage);
      });
    }else{
      this.listOfAircraft.forEach(aircraft => {
       this.ammoStorage = aircraft.refill(this.ammoStorage);
      });

    }

   

  }


  fight(enemyCarrier: Carrier) {
    let damage:number = 0;
    this.listOfAircraft.forEach(aircraft => {
      damage += aircraft.fight();
    });

    enemyCarrier.healthPoint -= damage;
  }

  getStatus():string{

      let result:string = '';
      let totalAmmo:number = 0;

    if(this.healthPoint <= 0){
      return result = "It's dead Jim :(";
    }

    let resultArray:string[] = [];

    this.listOfAircraft.forEach(aircraft => {
      resultArray.push(`Type ${aircraft.getType().toString()},
       Ammo: ${aircraft.ammo},
        Base Damage: ${aircraft.baseDamage},
         Total damage: ${aircraft.damage}` );
    });

    resultArray.unshift(`HP: ${this.healthPoint},
     Aircraft count: ${this.listOfAircraft.length},
     Ammo Storage: ${this.ammoStorage}
     `)

      result = resultArray.join("\n");

    return result;

  }
}

let battleShip = new Carrier(500, 400);
let plane = new F16(20);
let listPlane = [new F16(10), new F16(22), new F35(45), new F35(5) ]
battleShip.listOfAircraft = listPlane;
console.log(battleShip.getStatus());
battleShip.fill();
console.log(battleShip.getStatus());


let topGun = new Carrier(800, 200);
let listPlane2 = [new F16(10), new F16(2), new F35(45), new F35(15) ]
topGun.listOfAircraft = listPlane2;

console.log(battleShip.getStatus());
battleShip.fill();
battleShip.fight(topGun);
console.log(battleShip.getStatus());

