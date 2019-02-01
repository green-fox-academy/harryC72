
// Reuse your Animal class
// Create a Farm class
//     it has list of Animals
//     it has slots which defines the number of free places for animals
//     breed() -> creates a new animal if there's place for it
//     slaughter() -> removes the least hungry animal


import { Animal } from '../day-3/animal'

class Farm {
  animals: Animal[];
  slots: number;
  animal: Animal;

  constructor(thisFarmsAnimals, initialSlots) {
    this.animals = thisFarmsAnimals;
    this.slots = initialSlots - thisFarmsAnimals;
  }

  breed(animal: Animal) {
    if (this.slots > 0) {
      this.animals.push(animal);
      this.slots--;
    }
    else {
      console.log('There is not space for more animals');
    }
  }

  slaughter() {

    let min: number = 100;
    let minIndex: number = undefined;

    this.animals.forEach(function (value, index) {
      if (value.hunger < 100) {
        min = value.hunger;
        minIndex = index;
      }

      let result = this.animals[minIndex];

      return result;

    });

  }


}

let animal1 = new Animal(5, 4);
let animal2 = new Animal(3, 3);
let animal3 = new Animal(4, 4);
let animal4 = new Animal(2, 2);
let animal5 = new Animal(3, 5);

let bunchAnimals: Animal[] = [animal1, animal2, animal3, animal4];

let djungleFarm: Farm = new Farm(4, bunchAnimals);

djungleFarm.breed(animal5);