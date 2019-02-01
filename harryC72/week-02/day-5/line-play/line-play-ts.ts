
// 'use strict';

// const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;    // endMark += 30;
// // endMark += 30;

// const ctx = canvas.getContext('2d');



// let positionX: number = 0;
// let positionY: number = 0;

// let startPositionX: number = 0;
// let startPositionY: number = 0;
// ctx.moveTo(startPositionX, startPositionY);
// let endMark: number = 0;
// let endMarkRoot = function (n: number): number { return nthRoot(n, 16) };



// function DrawFormFromTop(numSquares:number, sizeSquare:number) {

//   for (let i: number = 0; i <= numSquares; i++) {
//     ctx.moveTo(0, 0);
//     endMark += sizeSquare;
//     console.log(endMark);
//     let x: number = endMarkRoot(endMark);

//     for (let j: number = 0; j <= numSquares; j++) {
//       positionX = Math.pow(x, j);
//       positionY += sizeSquare;

//       ctx.lineTo(positionX, positionY);
//       ctx.strokeStyle = 'red';
//       ctx.stroke();
//     }

//     positionX= 0;
//     positionY = 0;
//   }

// }

// function DrawFormFromBottom(numSquares:number, sizeSquare:number) {
//   endMark = sizeSquare;
  

//   for (let i: number = 0; i <=numSquares; i++) {
//     ctx.moveTo(300, 300);

//     let x: number = endMarkRoot(endMark);

//     positionY = 300;
//     positionX = 300;

//     for (let j: number = 0; j < numSquares; j++) {
//       let factor: number = Math.pow(x, j);
//       console.log(factor);
//       positionY = 300- factor;      
//       positionX -= sizeSquare;

//       ctx.lineTo(positionX, positionY);
//       ctx.strokeStyle = 'red';
//       ctx.stroke();
//     }

//     endMark += 18.75;

//   }

// }

// DrawFormFromTop(16, 18.75);
// DrawFormFromBottom(16, 18.75);

// function nthRoot(x: number, n: number): number {
//   return Math.pow(x, 1 / n);
// }


'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function playLines (distance: number = 10, color1: string = 'blue', color2: string = 'red') {

  for (let i: number = 0; i < canvas.height/distance; i++) {
    console.log(canvas.height/distance);
    
    //upper lines
    ctx.beginPath();
    ctx.strokeStyle = color1;
    ctx.moveTo(canvas.width, canvas.height - (i * distance));
    ctx.lineTo(canvas.width - (i * distance), 0);
    ctx.stroke();
    // // bottom lines
    // ctx.beginPath();
    // ctx.strokeStyle = color2;
    // ctx.moveTo(0, 0 + (i * distance));
    // ctx.lineTo(0 + (i * distance), canvas.height);
    // ctx.stroke();
    
  }
}


playLines(20, 'pink', 'grey');