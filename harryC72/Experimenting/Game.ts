'use strict'

declare module "jquery" {
  export = $;
}

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

var CANVAS_WIDTH = canvas.height;
var CANVAS_HEIGHT = canvas.width;

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);


var textX = 50;
var textY = 50;

function update() {
  if (keydown.left) {
    player.x -= 2;
  }

  if (keydown.right) {
    player.x += 2;
  }
}

function draw() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}

var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};



