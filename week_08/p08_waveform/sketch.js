var snd;
var fft;

function preload() {
  snd = loadSound("jingle.mp3");
  fft = new p5.FFT();
}

function setup() {
  createCanvas(1024, 800);
  snd.loop();
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  // grab the current waveform of the sound  
  var waveform = fft.waveform();

  // draw our waveofmr as a series of vertices
  beginShape();
  for (var i=0; i<waveform.length; i++) {
    var x = i;
    var y = 300 + 300 * waveform[i];
    vertex(x, y);
  }
  endShape();
}