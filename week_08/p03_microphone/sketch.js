var mic;
var level;

function setup() {
  createCanvas(500, 500);
  
  mic = new p5.AudioIn();
  mic.start();
  
  level = 0;
}

function draw() {
  background(0);
  
  level = mic.getLevel();
  
  // or you can smooth it
  //level = lerp(level, mic.getLevel(), 0.1);
  
  fill(0, 255, 0);
  ellipse(width/2, height/2, 400 * level, 400 * level);
}
