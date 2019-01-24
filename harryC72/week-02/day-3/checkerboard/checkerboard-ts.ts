'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


function drawSquare(x: number, y: number, color: string) {

  ctx.beginPath();
  ctx.rect(x, y, 30, 30);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

let positionY: number = 0;
let positionX: number = 0;
let colorSquare: string = '';


for (let i: number = 0; i < 8; i++) {
  for (let j: number = 0; j < 8; j++) {
      
    squareColor(i, j);
  
    drawSquare(positionX, positionY, colorSquare);
    positionX += 30;
  }

  positionY += 30;
  positionX = 0;
}


function squareColor(outer: number, inner: number) {
  if (outer % 2 == 0) {
    if (inner % 2 == 0) {
      colorSquare = 'white';
    }
    else {
      colorSquare = 'black';
    }
  }
  else {
    if (inner % 2 == 0) {
      colorSquare = 'black';
    }
    else {
      colorSquare = 'white';
    }

  }


}

