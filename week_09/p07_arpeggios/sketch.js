var s1;
var reverb;

var chromatic=[];
var majorScale=[];

var timeLastMouseClick = 0;

function setup() {
  createCanvas(1024, 800);
  
  // initialize a square wave
  s1 = new p5.Oscillator();
  s1.setType('square');
  s1.start();
  
  // frequencies of a chromatic scale
  for (var i=0; i<13; i++) {
    var ratio = pow(2.0, i/12);
    chromatic.push(ratio);
  }
  
  // major scale is the following subset of chromatic
  majorScale.push(chromatic[0]);
  majorScale.push(chromatic[2]);
  majorScale.push(chromatic[4]);
  majorScale.push(chromatic[5]);
  majorScale.push(chromatic[7]);
  majorScale.push(chromatic[9]);
  majorScale.push(chromatic[11]);
  majorScale.push(chromatic[12]);
  
  // disconnect it from the sound card, so that later
  // when we connect to reverb, we will only hear the output 
  // from the reverb
  s1.disconnect();

  // create reverb
  reverb = new p5.Reverb();
  
  // connect it to s1
  // parameters: delay, decayRate, reverse?
  reverb.process(s1, 2, 3, true);  
}

function draw() {
  // declare x
  var x;
  
  // time elapsed since last mouseClick
  var elapsed = millis() - timeLastMouseClick;
  if (elapsed < 250) {
    x = 0;  
    s1.amp(1);
  }
  else if (elapsed < 500) {
    x = 2;
  }
  else if (elapsed < 750) {
    x = 4;
  }
  else if (elapsed < 1000) {
    x = 6;
  }
  else {
    s1.amp(0);
  }

  s1.freq(220.0*majorScale[x]);
  //s1.freq(map(mouseX, 0, width, 200, 700));
  //s1.amp(map(sin(frameCount), -1, 1, 0, 1));
  
  // now we can set delay of reverb
  background(255);
  
  textSize(100);
  text("note "+x, 150, 150);
  text("time passed: "+elapsed, 150, 250);
}


function mousePressed() {
  timeLastMouseClick = millis();
}
