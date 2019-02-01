'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let boxArray: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let formArray: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
 [120, 100], [85, 130], [50, 100]];

let startPosX: number = 0;
let startPosY: number = 0;
let endPosX: number = 0;
let endPosY: number = 0;

function connectTheDots(XYarray: number[][]) {

  for (let i: number = 0; i < XYarray.length; i++) {
    
    if(i==XYarray.length-1)
    {
      startPosX = XYarray[0][0];
      startPosY = XYarray[0][1];
      endPosX = XYarray[i][0];
      endPosY = XYarray[i][1];

      drawALine(startPosX, startPosY, endPosX, endPosY);

    }
    else{
      startPosX = XYarray[i][0];
      startPosY = XYarray[i][1];
      endPosX = XYarray[i+1][0];
      endPosY = XYarray[i+1][1];

      drawALine(startPosX, startPosY, endPosX, endPosY);

    }

  }


}


connectTheDots(boxArray);


      // ctx.moveTo(array[x][0], array[x][1]);
      // ctx.lineTo(array[x + 1][0], array[x + 1][1]);


function drawALine(startX, startY, endX, endY) {

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = 5;
  ctx.stroke();
}


