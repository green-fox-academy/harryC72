'use strict'

import { Plant } from './plant'

export class Flower extends Plant {

  constructor(flowerColor: string, flowerNeedsWater: number = 5, flowerTakesUpWater = 0.75){
    super(flowerColor, flowerTakesUpWater);
    this.needsWater = flowerNeedsWater;
  }
  
  getStatus(): void {
    let status: string = '';
    this.needsWater > this.water? 
    status = 'needs water':
    status = "doesn't need water";
    console.log(`The ${this.color} Flower ${status}`);
  }
 
}