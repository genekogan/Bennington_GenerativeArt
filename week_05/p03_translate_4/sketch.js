function setup() {
  createCanvas(800, 800);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  
  for (var i=0; i<20; i++) {
    translate(80, 40);
    drawHouse();
  }
}

function drawHouse() {
  triangle(0, 0, -100, 100, 100, 100);
  rect(-90, 100, 180, 200);
  rect(-50, 210, 30, 90);
  rect( 10, 150, 50, 40);
}