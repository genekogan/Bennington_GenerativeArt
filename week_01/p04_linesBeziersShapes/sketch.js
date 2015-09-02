function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  noFill();
  line(50, 50, 350, 250); // first endpoint x1, y1 to second endpoint x1, y2
  
  // bezier arguments:
  // first endpoint, x1, y1
  // first anchor point, x2, y2
  // second anchor point, x3, y3
  // secnond endpoint, x4, y4
  bezier(100, 50, 400, 250, 120, 80, 370, 420);
}