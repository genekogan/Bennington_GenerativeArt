var canvas;

function setup() {
  canvas = createCanvas(500, 500);
}

function draw() {
  background(0, 0, 255);
  fill(0, 255, 0);
  ellipse(250, 250, 300, 300);
  fill(255);
  text("click me", 250, 250);
}

function mousePressed() {
  createP("hello world! you clicked me at frame " + frameCount);
}

function keyPressed() {
  createA("http://www.bennington.edu", "this is a link to bennington");
}