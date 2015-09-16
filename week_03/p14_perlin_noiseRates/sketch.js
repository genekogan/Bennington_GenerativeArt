var nx;
var ny;

function setup() {
  createCanvas(800, 800);
  nx = 0;
  ny = 0;
}

function draw() {
  
  var x = map(noise(nx), 0, 1, 0, width/2);
  var y = map(noise(ny), 0, 1, 0, width/2);
  var w = 500;
  var h = 500;

  background(0);
  fill(255);
  rect(x, y, w, h);
  
  // let our noise factors for x and y change for
  // each frame.
  // because ny is changing faster than nx (+0.1 vs +0.01),
  // the noise corresponding to y will be much faster changing 
  // than the noise corresponding to x
  nx += 0.01;
  ny += 0.1;
}