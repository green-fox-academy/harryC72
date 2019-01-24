
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawCenteredSquare (size: number){
  
  let x: number = 300-(size/2);
  let y: number = 200-(size/2);

  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

let sizeXY: number = 40;

for(let i:number = 0; i<=150; i= i+50)
{
  drawCenteredSquare(sizeXY);
  sizeXY+=i;

}
