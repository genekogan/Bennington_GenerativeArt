function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  
  fill(255);
  textSize(36);
  
  text("hello bennington!", 50, 200); 
  text("we are on frame: "+frameCount, 50, 250); 
}