var snd;
var amp;
var level;

function preload() {
  snd = loadSound('1085.mp3');
}

function setup() {
  createCanvas(500, 500);
  amp = new p5.Amplitude();
  snd.loop();
  level = 0;
}

function draw() {
  
  level = amp.getLevel();
  
  // or you can use lerp to smooth the amplitude signal
  //level = lerp(level, amp.getLevel(), 0.1);
  
  var sizeCircle = 500 * level;
  
  background(255);
  fill(0, 255, 0);
  ellipse(width/2, height/2, sizeCircle, sizeCircle)
}
