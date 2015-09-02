function setup() {
  createCanvas(500, 500);
  background(0, 0, 120);
}

function draw() {

  // colors can have an optional fourth argument
  // called alpha -- this controls the opacity/transparency.
  // 0 is fully transparent, 255 is fully opaque, and 
  // between is translucent
  
  fill(255);
  rect(70, 70, 300, 300);
  
  // the fourth argument makes the other rectangle more or less
  // opaque/transparent. we attach the value to the x position
  // of the mouse
  fill(255, 0, 0, mouseX);
  rect(200, 200, 240, 250);
  
}