var n;

function setup() {
  createCanvas(1000, 900);
  
  n = 16;
}

function draw() {
  background(0);

  translate(width/2, height/2);
  
  ellipse(0, 0, 100, 100);
  
  // make n evenly-spaced circles orbiting around the center point
  
  for (var i=0; i<n; i++) {
    var angle = map(i, 0, n, 0, TWO_PI);
    
    var x = map(sin(0.03*frameCount), -1, 1, -300, 300);
    var y = map(sin(0.02*frameCount), -1, 1, -300, 300);
    var sizex = map(noise(0.03*frameCount+5), 0, 1, 0, 500);
    var sizey = map(noise(0.02*frameCount+8), 0, 1, 0, 500);

    push();
    rotate(angle + 0.01*frameCount);
    fill(255, 150);
    ellipse(x, y, sizex, sizey);
    pop();
  }
  
}

