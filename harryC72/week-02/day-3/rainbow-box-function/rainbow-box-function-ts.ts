'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.



function rainbowSquare(size: number, color: string) {

  let x: number = 300 - (size / 2);
  let y: number = 200 - (size / 2);

  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

let sizeXY: number = 200;
let colors: string[] = ['red', 'green', 'yellow', 'blue'];

for (let i: number = 0; i < 3; i++) {
  let color: string = colors[i];
  rainbowSquare(sizeXY, color);
  sizeXY -= 50;
}