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
  
  rotate(mouseX*0.01);
  rect(200, 200, 200, 200);  
}
