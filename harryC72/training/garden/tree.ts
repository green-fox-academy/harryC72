'use strict'

import { Plant } from './plant'

export class Tree extends Plant {

  constructor(treeColor: string, treeNeedsWater = 10, treeTakesUpWater: number = 0.40){
    super(treeColor, treeTakesUpWater)
    this.needsWater = treeNeedsWater;
  }

  getStatus(): void {
    let status: string = '';
    this.needsWater > this.water? 
    status = 'needs water':
    status = "doesn't need water";
    console.log(`The ${this.color} Tree ${status}`);
  }

}