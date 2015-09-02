// this statement "declares" that we have
// a variable called "x"
var x;

function setup() {
  createCanvas(500, 500);
  
  // "initialize" x with some value
  x = 200;
}

function draw() {
  
  background(0);
  fill(255);
  ellipse(x, 300, 200, 200);

  // this increments the value of x by 1 each frame
  x = x + 1;

  // this is an if statement --
  // it means that if the statement is true, then do
  // what's inside the braces
  if (x > width) {
    x = 0;
  }
}