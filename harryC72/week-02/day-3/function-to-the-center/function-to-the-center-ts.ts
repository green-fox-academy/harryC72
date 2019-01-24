
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLineToCenter(x: number, y: number) {

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(300,200);
ctx.lineWidth = 5;
ctx.stroke();

}


let positionX: number = 0;
let positionY: number = 0;



function drawLinesToCenter(height: number, width: number){

  for(let i: number = 0; i < height/20; i++)
  {
     drawLineToCenter(positionX, positionY);
     positionY += 20;
  }

  for(let i: number = 0; i <= width/20; i++)
  {
     drawLineToCenter(positionX, positionY);
     positionX += 20;
  }
  positionY = 0; 

  positionX=600;
  for(let i: number = 0; i < height/20; i++)
  {
     drawLineToCenter(positionX, positionY);
     positionY += 20;
  }
  positionX= 0;
  positionY=0;
  for(let i: number = 0; i <= width/20; i++)
  {
     drawLineToCenter(positionX, positionY);
     positionX += 20;
  }

}

drawLinesToCenter(400, 600);
