function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  
  // set color for ellipse and rectangle
  fill(0, 0, 255);
  stroke(100, 50, 90);
  strokeWeight(16);
  
  // review shapes:
  // ellipses, rectangles / quads, triangles, lines, beziers
  ellipse(100, 100, 200, 200);
  rect(250, 50, 300, 180);
  
  // set color for triangle, quad, line, and bezier
  // colors can have an optional fourth argument -- opacity (transparency)
  fill(20, 50, 100, 100);
  stroke(0, 255, 0);
  strokeWeight(5);

  triangle(56, 700, 650, 402, 210, 60);
  quad(mouseX, mouseY, 100, 289, 200, 100, 720, 60);
  
  line(400, 200, 500, 650);
  bezier(200, 300, 800, 560, 200, 900, 320, 450);
  
  // text
  textSize(24);
  text("hello bennington!", 600, 760);
}