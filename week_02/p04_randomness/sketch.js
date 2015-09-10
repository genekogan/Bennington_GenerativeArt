function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(0);
  
  // random(x) gives you a random number between 0 and x
  // random(x, y) gives you a random x and y
  rect(100, 100, random(500), 300);
 
  rect(100, 500, random(200, 300), 300);
}