function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  ellipse(200, 100, 300, 100);
  ellipse(mouseX, mouseY, 100, 100);
}