var snd;
var fft;

function preload() {
  snd = loadSound("jingle.mp3");
  fft = new p5.FFT();
}

function setup() {
  createCanvas(800, 800);
  snd.loop();
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  // grab the current waveform of the sound  
  var waveform = fft.waveform();

  // draw a circle "manually"
  var numPoints = waveform.length;
  var radius = 300;
  beginShape();
  for (var i=0; i<numPoints; i++) {
    var ang = map(i, 0, numPoints, 0, TWO_PI);
    var r = radius + 300 * waveform[i];
    var x = 400 + r * cos(ang);
    var y = 400 + r * sin(ang);
    vertex(x, y);
  }
  endShape(CLOSE);

}