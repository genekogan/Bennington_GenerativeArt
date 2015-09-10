var y1, y2, y3;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  background(0);
  
  y1 = 400 + 400 * sin(0.01 * frameCount);
  y2 = 400 + 400 * sin(0.02 * frameCount);
  y3 = 400 + 400 * sin(0.04 * frameCount);
  
  ellipse(200, y1, 120, 120);
  ellipse(400, y2, 120, 120);
  ellipse(600, y3, 120, 120);

}