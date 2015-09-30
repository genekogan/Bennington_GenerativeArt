function setup() {
  createCanvas(800, 800);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  
  rect(100, 100, 200, 200);
  scale(2, 2);
  
  // scale is equivalent to multiple all the arguments by the scale factor
  // i.e. scale(2,2) makes rect(100, 100, 200, 200) equivalent to: rect(200, 200, 400, 400);
  rect(100, 100, 200, 200);
  
  // it "scales" the coordinate space
}
