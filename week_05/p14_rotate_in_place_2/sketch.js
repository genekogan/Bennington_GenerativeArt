function setup() {
  createCanvas(1000, 900);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  
  // rotate by an angle
  // angle is measured in radians (~6.28 is roughly one full revolution)
  // the command rotate(ang) will rotate the canvas around the
  // origin point (0, 0).
  // it's as though you put your finger down on (0, 0), and
  // rotated the page
  
  
  // if we translate before rotating, we move the
  // point (0, 0), and therefore we move the point around
  // which we do our rotation.
  
  // now this will rotate the rectangle around it's top-left corner
  // because that happens to be the origin


  // if we draw th rectangle such that it's center point
  // falls on (0, 0), we'll rotate it in place
  push();
  translate(300, 300);
  rotate(mouseX*0.01);
  rect(-100, -100, 200, 200);  
  pop();
  
  // an easier way to accomplish rotating rectangles in place...
  // use rectMode(CENTER)
  push();
  rectMode(CENTER);
  translate(600, 400);
  rotate(mouseX*0.01);
  rect(0, 0, 200, 200);  
  pop();
  
  
  
}
