var s1;
var reverb;

function setup() {
  createCanvas(1024, 800);
  
  // initialize a square wave
  s1 = new p5.Oscillator();
  s1.setType('square');
  s1.start();
  
  // disconnect it from the sound card, so that later
  // when we connect to reverb, we will only hear the output 
  // from the reverb
  s1.disconnect();

  // create reverb
  reverb = new p5.Reverb();
  
  // connect it to s1
  // parameters: delay, decayRate, reverse?
  reverb.process(s1, 10, 1, true);  
}

function draw() {
  
  s1.freq(map(mouseX, 0, width, 200, 700));
  s1.amp(map(sin(frameCount), -1, 1, 0, 1));
  
  // now we can set delay of reverb
  background(255);
}

