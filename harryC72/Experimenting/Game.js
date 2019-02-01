
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function update() {}


function draw() {
  canvas.fillStyle = "#000"; // Set color to black
  canvas.fillText("Sup Bro!", 50, 50);
}