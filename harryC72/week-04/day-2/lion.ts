'use strict'

import * as lib from './classExperimenting';

class Lion extends lib.Animal{
  strength: number
  
  constructor(animalSize, attackPoints, h, s){
  
    super(animalSize, attackPoints, h)
  
    this.strength = s;
  }
    Jump(){
      console.log('Forever');
    }
  
  }
  
  let groowie = new Lion(4,4,3,4);
  groowie.Jump();
  