
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.


// ctx.strokeStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(100, 40);
// ctx.lineTo(300, 200);
// ctx.lineWidth = 5;
// ctx.stroke();



function goToCenter(x: number, y: number){

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.lineWidth = 5;
  ctx.stroke();

}

for(let i: number =0; i<3; i++)
{
  let first: number = Math.random() * 600
  let second: number = Math.random() * 400;

  goToCenter(first, second);

}







 









