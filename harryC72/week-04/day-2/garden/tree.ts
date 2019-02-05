import { Plant } from './plant'

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

export class Tree extends Plant{

  constructor(treeColor: string, w: number, need: number = 10) {
    super(treeColor,w, need)
            this.color = treeColor;
            this.water = w;
            this.needsWatering = need

            
      }

      statusWatering(): boolean{
         let status = super.statusWatering();
         if(status){console.log(`${this.color} Tree is thirsty`);
        return status}
         else{
          console.log(`${this.color} Tree doesn't need water`);
         }
      }

}