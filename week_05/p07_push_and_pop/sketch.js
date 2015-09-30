function setup() {
  createCanvas(900, 900);
  noFill();
  stroke(255);
}

function draw() {
  background(0);

  // push sets to remember the current coordinate space setup  
  push();
  translate(200, 200);
  drawHouse();
  pop();
  // pop reverts back to the previously remembered coordinatd space setup (in push())
  
  
  // pop() reverts back the coordinate space to where it 
  // was before push().
  // so we can specify explicity where to draw the next 
  // house, e.g. 500,200 instead of remembering the current 
  // state of our translations


  push();
  translate(500, 200);    
  drawHouse();
  pop();
  
  
  
}

function drawHouse() {
  triangle(0, 0, -100, 100, 100, 100);
  rect(-90, 100, 180, 200);
  rect(-50, 210, 30, 90);
  rect( 10, 150, 50, 40);
}