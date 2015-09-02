function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  
  // the first ellipse is white because fill wasn't called, and the default color is still white
  
  ellipse(200, 100, 300, 100);  // ellipse = (center x, center y, width, height)
  fill(255, 0, 0);
  
  rect(250, 250, 200, 120); // rect = (top-left x, top-left y, width, height)
  fill(0, 255, 0);
  
  triangle(20, 480, 100, 400, 350, 440);  // triangle = (x1, y1, x2, y2, x3, y3)
  fill(127, 127, 0); 
}