'use strict'
import { Plant } from './plant'

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

export class Flower extends Plant {

  constructor(flowerColor: string, w: number, need: number = 5) {
    super(flowerColor, w, need)
          this.color = flowerColor;
          this.water = w;
          this.needsWatering = need;
      }

      statusWatering():boolean{
        let status = super.statusWatering();

        if(status){
          console.log(`${this.color} Flower is thirsty`);
        return status;
        }else{
          console.log(`${this.color} Flower doesn't need water`);
          
        }
      }
    }
      

