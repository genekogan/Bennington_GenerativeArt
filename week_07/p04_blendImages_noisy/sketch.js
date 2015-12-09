var img1;
var img2;

function preload() {
  img1 = loadImage("starrynight.jpg");
  img2 = loadImage("monet.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  image(img1, 5, 5);
  blend(img2, 0, 0, img2.width, img2.height, 5, 5, img1.width, img1.height, LIGHTEST);
}