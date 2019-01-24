'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function purpleSteps(step:number, size: number){
  ctx.beginPath();
  ctx.rect(step, step, size, size);
  ctx.fillStyle = 'purple';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';
  ctx.stroke();

}

let stepping: number = 3;
let sizeBox: number = 10;
let increaser: number = 2;

for(let i: number = 0; i<6; i++)
{

  purpleSteps(stepping, sizeBox);
  stepping +=sizeBox;
  sizeBox= increaser*sizeBox;
  increaser -= 0.2;
  
}