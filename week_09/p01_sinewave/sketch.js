var s;

function setup() {
  createCanvas(1024, 800);
  
  // by default, creates a sinewave of 440hz
  s = new p5.Oscillator();
  s.setType('square');
  s.start();
}

function draw() {
  var f = map(mouseX, 0, width, 0, 500);
  var a = map(sin(frameCount*0.1), -1, 1, 0, 1);
  
  s.freq(f);
  s.amp(a);
  
  background(255);
  textSize(100);
  text(f, 100, 100);
}