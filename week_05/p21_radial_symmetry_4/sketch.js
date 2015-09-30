var n;

function setup() {
  createCanvas(1000, 900);
  
  n = 8;
}

function draw() {
  background(0);

  translate(width/2, height/2);
  
  ellipse(0, 0, 100, 100);
  
  // make n evenly-spaced circles orbiting around the center point
  
  for (var i=0; i<n; i++) {
    var angle = map(i, 0, n, 0, TWO_PI);

    push();
    rotate(angle + 0.01*frameCount);
    collectionOfShapes();
    pop();
  }
  
}

// this is pretty much random
function collectionOfShapes() {
  noFill();
  stroke(255);
  ellipse(320, 20, 100, 50);
  rect(20, 220, 80, 145);
  triangle(-100, -5, -20, 115, 400, 125);
  bezier(100, -400, -200, -100, 50, 300, -225, -150);
}