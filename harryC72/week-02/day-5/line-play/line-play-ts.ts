
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;    // endMark += 30;
// endMark += 30;

const ctx = canvas.getContext('2d');



function drawQuatricCurve(startX: number, startY: number, midX: number,
  midY: number, finalX: number, finalY: number) {

  ctx.moveTo(startX, startY);
  ctx.quadraticCurveTo(midX, midY, finalX, finalY);
  ctx.stroke();
  ctx.strokeStyle = 'red';
}

let factor: number = 100;

function drawLinePlay(numberOfLines: number, startX: number, startY: number) {

  let j: number = 5;

  for (let i: number = 1; i <= numberOfLines; i++) {

    let midX = (canvas.width / (numberOfLines * 2));
    let midY = (canvas.height / 2);
    let finX = (canvas.width / numberOfLines) * i;
    let finY = (canvas.height);
    drawQuatricCurve(startX, startY, midX, midY, finX, finY);
    j += 20;
    midX += canvas.width / numberOfLines;
  }
}



// drawQuatricCurve(0, 0, 10, 150, 20, 300);
drawLinePlay(15, 0, 0);
