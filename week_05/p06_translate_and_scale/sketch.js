function setup() {
  createCanvas(900, 900);
  noFill();
  stroke(255);
}

function draw() {
  background(0);

  for (var i=0; i<8; i++) {
    translate(30, 30);
    scale(1.5, 1.5);
    triangle(20, 20, 40, 60, 10, 50);
  }
  
}
