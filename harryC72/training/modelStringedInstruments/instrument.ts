'use strict'

export abstract class Instrument {
  protected name: string;

  play(){
    console.log(`${this.name}`);
  }
}



