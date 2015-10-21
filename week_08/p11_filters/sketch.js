var snd;
var bpf;

function preload() {
  snd = loadSound("jingle.mp3");
}

function setup() {
  createCanvas(800, 800);
  snd.loop();
  
  // create bandpass filter, connect clip to it
  bpf = new p5.BandPass();
  snd.connect(bpf);
}

function draw() {
  background(0);
  
  // set frequency of bandpass filter
  var f = 10000 * (mouseX / width)^(0.03);
  
  // set bandpass filter
  bpf.freq(f);
}