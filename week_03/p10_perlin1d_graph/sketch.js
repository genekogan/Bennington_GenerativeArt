var noiseFactor;

function setup() {
  createCanvas(800, 800);
  textSize(24);
}

function draw() {
  background(0);
  
  // noiseFactor will control how close the values
  // are that we are using to sample from the noise field
  
  noiseFactor = map(mouseX, 0, width, 0, 0.2);

  
  stroke(255);
  strokeWeight(3);
  noFill();
  beginShape();
  for (var x=0; x<width; x++) {
    
    // new variable nx is going to be the argument
    // we pass to sample from the noise field (noise(nx)).
    // noise(nx) gives us value between 0 and 1
    // height * noise(nx) scales that to between 0 and height
    // to get smooth variation, we sample noise at relatively
    // close values of nx

    var nx = noiseFactor * x;
    var y = height * noise(nx);
    vertex(x, y);
  } 
  endShape();
  
  
}