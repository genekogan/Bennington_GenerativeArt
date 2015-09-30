function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(255);
  
  // draw a series of rectangles
  for (var i=0; i<5; i++) {
    translate(mouseX, mouseY);
    rect(0, 0, 25, 100);
  }
}