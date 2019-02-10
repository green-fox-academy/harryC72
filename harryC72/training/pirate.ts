class Pirate {
  name:string;
  amountOfGold:number;
  healthPoints:number;
  isCaptain:boolean;
  hasAWoodenLeg:boolean;

  constructor(
    pName:string,
    pAmountOfGold:number = 10,
    pHealthPoints:number = 10,
    pIsCaptain?:boolean,
    pHasWoodenLeg?:boolean,
  ) {
    this.name = pName;
    this.amountOfGold = pAmountOfGold;
    this.healthPoints = pHealthPoints;
    this.isCaptain = pIsCaptain;
    this.hasAWoodenLeg = pHasWoodenLeg;
  }

  work():void {
    if(this.isCaptain === true){
      this.amountOfGold += 10;
      this.healthPoints -= 5;
    } else {
      this.amountOfGold += 1;
      this.healthPoints -= 1;
    }
  }

  party():void {
    if(this.isCaptain === true) {
      this.healthPoints += 10;
    } else {
      this.healthPoints += 1;
    }
  }

  theFunction():string {
    const legText = this.hasAWoodenLeg === true
      ? 'have a wooden leg' 
      : 'still have my real legs';

/*     if (this.hasAWoodenLeg === true) {
      return `Hello, I'm ${this.name}. I have a wooden leg and ${this.amountOfGold} golds.`;
    } else {
      return `Hello, I'm ${this.name}. I still have my real legs and ${this.amountOfGold} golds.`;
    } */

    return `Hello, I'm ${this.name}. I ${legText} and ${this.amountOfGold} golds.`;
  }
}

class Ship {
  pirates:Pirate[];

  addNewPirate(onePirate:Pirate):void {
    if (
      !(this.isThereACaptain() === true &&
      onePirate.isCaptain === true)
    ) {
      this.pirates.push(onePirate);
    }
  }

  isThereACaptain():boolean{
/*     let result2 = false;
    this.pirates.forEach(function(pirate:Pirate):void{
      if (pirate.isCaptain === true) {
        result2 = true;
      }
    })
    return result2; */

    return this.pirates.some(function(pirate:Pirate):boolean{
      return pirate.isCaptain === true;
    });
  }

  getPoorPirates():string[]{
    return this.pirates
      .filter(function(pirate:Pirate):boolean{
        return pirate.hasAWoodenLeg === true && pirate.amountOfGold < 15;
      })
      .map(function(pirate:Pirate):string{
        return pirate.name;
      });
  }

  getGolds():number{
/*     return this.pirates.reduce(function(sumOfGold:number, pirate:Pirate):number{
      return sumOfGold += pirate.amountOfGold;
    }, 0); */

    let sumOfGold:number = 0;
    for(let i:number = 0; i < this.pirates.length; i++) {
      sumOfGold += this.pirates[i].amountOfGold;
    }
    return sumOfGold;
  }

  lastDayOnTheShip():void{
    this.pirates.forEach(function(pirate:Pirate):void{
      pirate.party();
    });
  }

  prepareForBattle():void{
    //this.pirates.forEach()
    for(let j:number = 0; j < this.pirates.length; j++){
      for(let i:number = 1; i < 6; i++){
        this.pirates[j].work();
      }
    }

    this.lastDayOnTheShip();
  }
}
