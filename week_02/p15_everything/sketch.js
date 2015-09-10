var num_x;
var num_y;
var size;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);

  // create and call our own function
  setVariables();
}

// you can create your own function.
// let's make one which initializes all of the global
// variables.
function setVariables() {
  num_x = random(3, 24);
  num_y = random(3, 24);
  size = random(50, 100);
}

function draw() {
  background(0);

  for (var i=0; i<num_x; i++) {
    for (var j=0; j<num_y; j++) {
      
      var x = map(i, 0, num_x, 0, width);
      var y = map(j, 0, num_y, 0, height);
      
      var offset_x = map(sin(0.01 * i * frameCount), -1, 1, -20, 20);
      var mult_y = map(sin(0.001 * i * j * frameCount), -1, 1, 0.5, 2.0);
      
      var opacity = map(sin(0.001 * i * j * frameCount), -1, 1, 0, 150);
      
      fill(255, opacity);
      rect(x + offset_x, y, size, size * mult_y);
    }
  }  
}

function keyPressed() {
  if (key==' ') {
    setVariables();
  }
}