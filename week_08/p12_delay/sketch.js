var snd;
var del;

function preload() {
  snd = loadSound("jingle.mp3");
}

function setup() {
  createCanvas(800, 800);
  snd.loop();
  
  del = new p5.Delay();
  
}

function draw() {
  background(0);
  
  // arguments for delay
  // 1) input source (snd)
  // 2) delay time (0.12 seconds)
  // 3) feedback (e.g. add delayed signal back to 0.7*original)
  // 4) frequency for internal filter
  del.process(snd, 0.12, 0.7, 2300);
}