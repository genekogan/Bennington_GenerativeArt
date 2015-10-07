// this example lets us draw two houses with less
// code than doing all of the draw commands individually.
// but the coordinates in drawHouse() are inconsistent with where they
// are being drawn because of translate.
// objects/classes will let us organize this code much better.
// see p02_classes_intro

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  drawHouse();
  translate(-300, 0);
  drawHouse();
}

function drawHouse() {
  noFill();
  stroke(255);
  rect(400, 400, 200, 400);
  triangle(360, 400, 640, 400, 500, 200);
  rect(500, 500, 80, 200);
}