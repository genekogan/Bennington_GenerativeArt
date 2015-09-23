function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noFill();
  
  var numSquares = random(100);
  var maxStrokeWeight = random(50);
  var maxAlpha = random(20, 150);

  for (var i=0; i<numSquares; i++) {
    var size = random(700);
    strokeWeight(random(maxStrokeWeight));
    stroke(0, random(maxAlpha));
    rect(width/2, height/2, size, size);
  }
}

function mousePressed() {
  setup();
}