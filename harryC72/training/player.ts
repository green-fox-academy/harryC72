'use strict'

import { Character, CharProp } from './character'
import * as lib from './library'
import { Draw } from './draw';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


export class Player extends Character {


  constructor(x: number, y: number, obj: CharProp = {
    gameHeight: 10,
    gameWidth: 10,
    charStatus: 'hero-down',
    charHealthPoints: 20 + (3 * lib.rollDice()),
    charDefendPoints: 2 * lib.rollDice(),
    charStrikePoints: 5 + lib.rollDice(),
    charIsDead: false,
    charDraw: new Draw(50, 50)
  }) {

    super(x, y, obj)

  }

  move(draw: Draw, array: number[][], input: string): void {
    let newX: number = this.x;
    let newY: number = this.y;
    this.status = 'hero-' + input;
    if(input == 'left'){newX = this.x -= 1, newY = this.y}
    if(input == 'up'){newX = this.x, newY = this.y -= 1};
    if(input == 'right'){newX = this.x += 1, newY = this.y};
    if(input == 'down'){newX = this.x, newY = this.y += 1};
    
      draw.drawCharacter(newX, newY, this.status);    
  
  }

  strike(): void {

  }
}


