function setup() {
  createCanvas(800, 800);
  textSize(20);
}

function draw() {
  background(0);
  
  translate(mouseX, mouseY);
  
  // draw the "origin", point (0, 0)
  fill(255, 0, 0);
  text("(0, 0)", 0, 0);
  
  // draw a circle at (100, 100);
  fill(255);
  ellipse(100, 100, 100, 100);
}