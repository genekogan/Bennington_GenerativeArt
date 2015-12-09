var snd;

function preload() {
  snd = loadSound('1085.mp3');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  var volume = mouseY / height;
  var pan = map(mouseX / width, 0, 1, -1, 1);
  snd.setVolume(volume);
  snd.pan(pan);
  
  if (snd.isPlaying()) {
    background(0, 255, 0);
  }
  else {
    background(255, 0, 0);
  }
  
  fill(255);
  text("click the mouse!", 50, 50);
}

function mousePressed() {
  snd.play();
}