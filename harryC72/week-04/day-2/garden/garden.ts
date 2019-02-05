'use strict'

import { Plant } from "./plant";
import { Flower } from './flower'
import { Tree } from './tree'

// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst themarray
// eg. watering with 40 and 4 of them need water then each gets watered with 10



class Garden {
  listOfPlants: Plant[];
  constructor() {
    this.listOfPlants = [];
  }

  watering(amount: number){
          let counter: number = 0;
        console.log(`Watered with ${amount}`);
        
        this.listOfPlants.forEach(element => {
          if(element.statusWatering() == true){ counter++};
        });

        this.listOfPlants.forEach(element => {
          element.watered(amount/counter);
        });

        this.listOfPlants.forEach(element => {
          element.statusWatering();
        });

  }
}


let boisBoulogne = new Garden();
boisBoulogne.listOfPlants = [new Flower('red', 4), new Flower('blue', 6), new Flower('yellow', 3),
 new Tree('light green', 8), new Tree('green', 6)];

boisBoulogne.watering(50);
boisBoulogne.watering(70);

// console.log(boisBoulogne);

// console.log(
//   boisBoulogne.listOfPlants[0].statusWatering()
// );
