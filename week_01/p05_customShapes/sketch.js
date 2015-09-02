function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
  
}

function draw() {
  
  // we can create custom polygons by specifying
  // all of the vertices explicitly
  
  // vertices go in between beginShape and endShape
  beginShape();
  vertex(80, 120);
  vertex(350, 240);
  vertex(400, 300);
  vertex(100, 350);
  vertex(50, 420);
  endShape(CLOSE);  // CLOSE is optional -- it connects the last point to the first point
}