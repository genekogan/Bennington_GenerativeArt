
function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(0);
  
  var r = 127 + 127 * sin(0.12*frameCount);
  var g = 20;
  var b = 100 + 100 * sin(0.1*frameCount);
  
  fill(r, g, b);
  rect(100, 100, 600, 400);

}