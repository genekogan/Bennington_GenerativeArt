var nx;
var ny;
var nw;
var nh;

function setup() {
  createCanvas(800, 800);
  nx = 0;
  ny = 0;
  nw = 0;
  nh = 0;
}

function draw() {
  
  var x = map(noise(nx), 0, 1, 0, width/2);
  var y = map(noise(ny), 0, 1, 0, width/2);
  var w = map(noise(nw), 0, 1, 50, 500);
  var h = map(noise(nh), 0, 1, 50, 500);

  background(0);
  fill(255);
  rect(x, y, w, h);
  
  // let our noise factors for x, y, w, and h change for
  // each frame.
  // they all change at different speeds
  nx += 0.01;
  ny += 0.1;
  nw += map(mouseX, 0, width, 0, 0.1);
  nh += map(mouseY, 0, height, 0, 0.1);
}