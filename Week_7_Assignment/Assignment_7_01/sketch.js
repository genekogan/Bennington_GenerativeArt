var img;

function preload(){
  img = loadImage("yinnyang");
}

function setup() {
  createCanvas(1440, 900);
}

function draw() {
  background(0);
  
  image(img, mouseX, mouseY);
}