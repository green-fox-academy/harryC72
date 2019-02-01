


export class Animal{
  hunger: number;
  thirst: number;


  eat(){
    --this.hunger;
  }

  drink(){
    --this.thirst;
  }

  play(){
    ++this.hunger;
    ++this.thirst;
  }

  constructor(inputHunger: number, inputThirst: number){
    this.hunger = inputHunger;
    this.thirst = inputThirst;
  }
}
