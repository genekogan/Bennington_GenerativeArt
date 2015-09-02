function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
  
}

function draw() {
  
  // fill() -> changes the fill color (body of the shape)
  // stroke() -> changes the stroke color (border of the shape)
  // strokeWeight() -> changes the pixel thickness of the stroke (border)
  // noFill() -> turns off fill, i.e. makes shape transparent
  // noStroke() -> turns off border
  
  // color representation:
  // the following commands accept a color as their arguments in the
  // form of three (or optionally four) arguments which are:
  // RED, GREEN, BLUE, and (optional) ALPHA
  // the value of each color is bounded between 0 and 255, where
  // 0 means none of that color, and 255 means all of it.
  // e.g. (255, 0, 0) = RED
  // e.g. (0, 255, 0) = GREEN
  // e.g. (0, 100, 0) = DARK GREEN
  // e.g. (255, 0, 255) = PURPLE
  // e.g. or some combination of the three, (50, 127, 210) -> "tealish/greenish"
  
  fill(0, 255, 0);
  stroke(255);
  strokeWeight(8);
  rect(20, 50, 130, 400);
  
  fill(0, 127, 100);
  stroke(0, 100, 50);
  rect(160, 50, 130, 400);
  
  noFill();
  stroke(random(255), random(255), random(255));
  rect(300, 50, 130, 400);
}