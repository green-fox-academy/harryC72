'use strict'


export class Animal{
  size: number;
  hitPoints: number;
  health: number;

  constructor(animalSize, attackPoints, h){
    this.size = animalSize;
    this.hitPoints = attackPoints;
    this.health = h;
  }

  Jump(){
    console.log('Jumping');
  }
}



