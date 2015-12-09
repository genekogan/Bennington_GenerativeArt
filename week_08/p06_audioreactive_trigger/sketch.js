var mic;
var level;
var bgcolor;
var isAboveThresh;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  
  mic = new p5.AudioIn();
  mic.start();
  
  bgcolor = color(0);
  
  isAboveThresh = false;
}

function draw() {
  
  // current amplitude of the microphone
  level = mic.getLevel();
  
  var threshold = mouseY / height;
  
  // check to see if we have just gone above the threshold
  if (level > threshold && !isAboveThresh) {
    isAboveThresh = true;
    bgcolor = color(random(255),random(255),random(255));
  }
  else if (level < threshold && isAboveThresh) {
    isAboveThresh = false;
  }

  background(bgcolor);
  
  if (level > threshold) {
    fill(0, 255, 0);
  }
  else {
    fill(255);
  }

  rect(width/3, 0, 100, level * height);
  
  stroke(255);
  fill(255);
  line(0, threshold * height, width, threshold * height);
  text("threshold "+threshold, 5, threshold * height);
}