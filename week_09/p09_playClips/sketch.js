var kick;
var snare;
var hat;

function setup() {
  createCanvas(1024, 800);
  
  kick = loadSound('kick23.wav')
  snare = loadSound('snare1.wav')
  hat = loadSound('hat3.wav')
}

function draw() {
  background(255);
  textSize(100);
  text("hit '1', '2', or '3'!", 100, 100);
}

function keyPressed() {
  if (key=='1') {
    kick.play();
  }
  if (key=='2') {
    snare.play();
  }
  if (key=='3') {
    hat.play();
  }
}