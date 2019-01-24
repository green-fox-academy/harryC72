'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.


ctx.beginPath();
ctx.rect(188, 50, 200, 100);
// ctx.fillStyle = 'yellow';
// ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();


ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(188, 50);
ctx.lineTo(388, 50);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(188, 150);
ctx.lineTo(388, 150);
ctx.lineWidth = 5;
ctx.stroke();


ctx.strokeStyle = 'pink';
ctx.beginPath();
ctx.moveTo(188, 50);
ctx.lineTo(188, 150);
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(388, 50);
ctx.lineTo(388, 150);
ctx.lineWidth = 5;
ctx.stroke();
