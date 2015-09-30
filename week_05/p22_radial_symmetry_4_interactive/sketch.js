var n;

function setup() {
  createCanvas(1000, 900);
  
  n = 50;
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
  fill(255, 40);
  noStroke(255);
  ellipse(mouseY, 20, 100, 50);
  rect(20+mouseY, 220-mouseX, 80, mouseX);
  triangle(-100+mouseY, -5, -20, mouseY, 400*sin(0.01*frameCount), 125);
  bezier(100, mouseX, -200, -100-mouseX, 50, mouseY, -225, -150);
}