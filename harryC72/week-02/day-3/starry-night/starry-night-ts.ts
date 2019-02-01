'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


let positionX = function () { return getRandomNumber(0, 600) };
let positionY = function () { return getRandomNumber(0, 800) };
let numberOfStars: number = getRandomNumber(40, 80);

function DrawStars() {

  for (let i: number = 0; i < numberOfStars; i++) {
    if (i == 0) {
      DrawRectangle(0, 0, 600, 400, 'black');
    }

    DrawRectangle(positionX(), positionY(), 4, 4, GetRandomShadeOfGrey());

  }

}

DrawStars();




function GetRandomShadeOfGrey(): string {
  let randNum = getRandomNumber(216, 255);
  console.log(randNum);
  let color: string = `rgb(${randNum}, ${randNum}, ${randNum})`;
  console.log(color);

  return color;
}


function DrawRectangle(x: number, y: number, width: number, height: number,
  color: string) {

  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.stroke();

}


function getRandomNumber(min: number, max: number): number {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

