'use strict'
import { F35 } from './f35'
import { F16 } from './f16'
import { Aircraft } from './aircraft';

class Carrier{
    listOfAircraft: Aircraft[];
    ammoStorage: number;
    healthPoint : number;

    constructor(as: number = 500, h: number = 500 ){
        this.listOfAircraft = [];
        this.ammoStorage = as;
        this.healthPoint = h;
    }

    add(airCraft: Aircraft){
        this.listOfAircraft.push(airCraft);
    }

    fill(){
      
      let test: number = 0;
        this.listOfAircraft.forEach(element => {
         test = element.refill(this.ammoStorage);
      });
      
    }

}



// fill

//     It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
//     If there is not enough ammo than it should start to fill the aircraftis with priority first
//     If there is no ammo when this method is called it should throw an exception

// fight

//     It should take another carrier as a refrence parameter and fire all the ammo from the aircrafts to it, than substract all the damage from it's health points

// getStatus

// It should give back a string about it's and all of its aircrafts status like:

// HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240

// If the health points are 0 than it should give back: It's dead Jim :(