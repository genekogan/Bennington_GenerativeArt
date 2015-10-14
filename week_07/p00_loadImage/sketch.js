var img;

function preload() {
  img = loadImage("starrynight.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  
  image(img, mouseX, mouseY);
}