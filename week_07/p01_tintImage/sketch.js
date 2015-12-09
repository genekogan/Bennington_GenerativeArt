var img;

function preload() {
  img = loadImage("starrynight.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  
  var r = map(mouseX, 0, width, 0, 255);
  var b = map(mouseY, 0, height, 0, 255);
  
  tint(r, 255, b);
  image(img, 5, 5);
}