'use strict'

export abstract class Plant{
  color: string;
  water: number;
  needsWater: number;
  takeUpWater: number; 

  constructor(plantColor: string, plantTakeUpWater: number){
    this.color = plantColor;
    this.takeUpWater = plantTakeUpWater;
  }

  watering(wateringWater: number): void {
  this.water = this.takeUpWater * wateringWater;
}

 abstract getStatus();

}