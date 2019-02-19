'use strict'
import { Instrument } from './instrument'

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(){
    super()
  }

  play(){
    super.play();
    console.log(`${this.numberOfStrings} stringed instrument`);
  }

  sound() {

  }

}
