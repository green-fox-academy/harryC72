'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(600, 300);
ctx.lineWidth = 5;
ctx.stroke();

