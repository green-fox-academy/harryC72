
'use strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]



function purpleSteps(step:number){
  ctx.beginPath();
  ctx.rect(step, step, 10, 10);
  ctx.fillStyle = 'purple';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

let step: number = 3;

for(let i: number = 0; i<18; i++)
{
  purpleSteps(step);
  step +=10;
  

}