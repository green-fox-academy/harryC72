'use strict'
import { Plant } from './plant'
import { Flower } from './flower'
import { Tree } from './tree'

// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10


export class Garden {
  water: number;
  plants: Plant[];

  constructor(gardenWater) {
    this.water = gardenWater;
    this.plants = [];
  }

  watering(waterWatering): void {
    let counter: number = 0;
    let waterEachPlant: number = 0;
    if (waterWatering > this.water) { console.log("You don't have so much water"); } else {
      this.plants.forEach(element => {
        counter++;
      });

      console.log(`Water with ${waterWatering}`);
      waterEachPlant = waterWatering / counter;

      this.plants.forEach(element => {
        element.watering(waterEachPlant);
        element.getStatus();
      });
      this.water = this.water - waterWatering;
    }
  }
}

let garden: Garden = new Garden(10);
garden.plants = [new Flower('yellow'), new Flower('blue'), new Tree('purple'), new Tree('orange')];
garden.watering(10);
garden.water = 40;
garden.watering(30);
