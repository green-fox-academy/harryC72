


'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.




function SquareDrawing(x: number, y: number) {
  ctx.beginPath();
  ctx.rect(x - 50, y, 50, 50);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawThreeSquares() {
  let tempArray: number[][] = [];

  for (let i: number = 0; i < tempArray.length==3; i++) {
    let positionX: number = getRandomArbitrary(55, 545);
    let positionY: number = getRandomArbitrary(55, 345);

    do {
      tempArray.push(positionX[i]);
      tempArray.push(positionY[i]);
    }
    while(!(positionX >=tempArray[i][2]-50 && positionX <= tempArray[i][2])||
    (positionY>=tempArray[i][2] && positionY <=positionY + 50))
  }

  // x >= min && x <= max

  for (let j: number = 0; j < 3; j++) {
    SquareDrawing(tempArray[j][1], tempArray[j][2]);
  }

}



drawThreeSquares();


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}