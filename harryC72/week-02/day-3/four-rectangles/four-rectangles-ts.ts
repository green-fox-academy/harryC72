
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRectangle(color: string) {

  let sizeX: number = Math.random() * 150 + 50;
  let sizeY: number = sizeX * Math.random() * 0.8 + 0.2;

  let x: number = Math.random() * 600 - sizeX;
  let y: number = Math.random() * 400 - sizeY;

  ctx.beginPath();
  ctx.rect(x, y, sizeX, sizeY);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

drawRectangle('red');

function drawFourRectangles(color1: string, color2: string, color3: string, color4: string) {

  let tempColorArr: string[] = [];
  tempColorArr.push(color1, color2, color3, color4);

  for (let i: number = 0; i < 4; i++) {
    drawRectangle(tempColorArr[i]);
  }

}


drawFourRectangles('red', 'blue', 'orange', 'black');

