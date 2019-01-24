
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 400);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(600, 0);
ctx.lineWidth = 5;
ctx.stroke();