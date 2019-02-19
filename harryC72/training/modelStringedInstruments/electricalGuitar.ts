'use strict'
import { StringedInstrument } from './stringedInstrument'

export class ElectricGuitar extends StringedInstrument{
  guitarSound: string;

  constructor(electricalGuitarSound: string = 'Twang', TelectricGuitarNumberStrings: number = 6){
    super()
  }

  play(){
    
  }
}

    // Electric Guitar (6 strings, 'Twang')

    // Bass Guitar (4 strings, 'Duum-duum-duum')

    // Violin (4 strings, 'Screech')

    // The Workshop should be invoked from another file like app.ts or main.ts
