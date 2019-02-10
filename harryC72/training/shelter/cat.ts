'use strict'
import { Animal } from './animal'

class Cat extends Animal{

  constructor(catName, catHealth, catHealing){
    
    super(catName = 'cat', catHealth,
     catHealing)

     this.name = catName;
     this.isHealthy = catHealth;
     this.healCost = catHealing || this.getRandomNumber(0, 6);
  }

  getRandomNumber(min, max):number{

    let value: number = super.getRandomNumber(min, max);

      return value;
  }

}





// We are working with 3 types of Animals
// -  Cat's healing cost should be a random number between 0 and 6
// -  Dog's healing cost should be a random number between 1 and 8
// -  Parrot's healing cost should be a random number between 4 and 10