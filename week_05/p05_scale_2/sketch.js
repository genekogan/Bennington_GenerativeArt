function setup() {
  createCanvas(800, 800);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  
  for (var i=0; i<8; i++) {
    scale(2, 2);
    
    // scale(2, 2) scales the coordinate x 2
    // so in each iteration, we keep doubling the effect
    // of the position arguments
    ellipse(12, 12, 20, 20);
    
    // e.g.
    // ellipse(12, 12, 20, 20);
    // ellipse(24, 24, 40, 40);
    // ellipse(48, 48, 80, 80);
    // ellipse(96, 96, 160, 160);
    // ....
  }
}
