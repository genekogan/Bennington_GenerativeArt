var img;

function preload() {
  img = loadImage("starrynight.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  
  fill(255);
  ellipse(width/2, height/2, 500, 500);
  
  var alph = map(mouseX, 0, width, 0, 255);
  
  tint(255, 255, 255, alph);
  image(img, 5, 5);
}