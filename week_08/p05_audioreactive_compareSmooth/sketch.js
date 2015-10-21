var mic;
var smoothedLevel;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
  
  smoothedLevel = 0;
}

function draw() {
  background(0);
  
  // current amplitude of the microphone
  var currentLevel = mic.getLevel();
  
  // get smoothed value with lerp
  smoothedLevel = lerp(smoothedLevel, currentLevel, 0.1);
  
  // current level
  ellipse(width/3, height/3, 400 * currentLevel, 400 * currentLevel);
  
  // smoothed level
  ellipse(2*width/3, height/3, 400 * smoothedLevel, 400 * smoothedLevel);
  
}