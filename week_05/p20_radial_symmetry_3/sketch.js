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
    ellipse(100, 0, 50, 50);
    pop();
  }
  
}
