
var aT = 0.1; // attack time in seconds
var aL = 0.7; // attack level 0.0 to 1.0
var dT = 0.3; // decay time in seconds
var dL = 0.1; // decay level  0.0 to 1.0
var sT = 0.2; // sustain time in seconds
var sL = dL; // sustain level  0.0 to 1.0
var rT = 0.5; // release time in seconds
// release level defaults to zero

var env;
var triOsc;

function setup() {
  background(0);
  noStroke();
  fill(255);
  textAlign(CENTER);
  text('click to play', width/2, height/2);

  env = new p5.Env(aT, aL, dT, dL, sT, sL, rT);
  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env); // give the env control of the triOsc's amp
  triOsc.start();
}

// mouseClick triggers envelope if over canvas
function mouseClicked() {
  // is mouse over canvas?
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    env.play(noise);
  }
}
