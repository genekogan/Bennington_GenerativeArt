function setup() {
  createCanvas(1000, 900);
  noFill();
  stroke(255);
}

function draw() {
  background(0);

  // push sets to remember the current coordinate space setup  
  for (var i=0; i<4; i++) {
    push();
    
    // because we are using push and pop, then the house's
    // (0,0) point is explicitly given by the one translate 
    // command which applies to it.
    // first house is at (0, 100)
    // second house is at (250, 100);
    // third house is at (500, 100), and so on.
    translate(250 * i, 100);
    drawHouse();
    
    pop();
  }

  
  
  
}

function drawHouse() {
  triangle(0, 0, -100, 100, 100, 100);
  rect(-90, 100, 180, 200);
  rect(-50, 210, 30, 90);
  rect( 10, 150, 50, 40);
}