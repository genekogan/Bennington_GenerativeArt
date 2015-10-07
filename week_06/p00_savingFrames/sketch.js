function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  
  for (var i=0; i<100; i++) {
    fill(random(255),random(255),random(255));
    ellipse(random(width), random(height), 200, 200);
  }
  
  saveFrames('myCanvas', 'jpg');
}