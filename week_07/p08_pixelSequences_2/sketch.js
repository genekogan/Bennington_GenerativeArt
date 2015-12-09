var img;
var imgOrig;

function preload() {
  img = loadImage("starrynight.jpg");
  imgOrig = loadImage("starrynight.jpg");
}

function setup() {
  createCanvas(800, 800);
  imgOrig.loadPixels();
  img.loadPixels();
  for (var i=0; i<img.pixels.length; i++) {
    var offset = floor(map(sin(i*0.001), -1, 1, -20, 20));
    img.pixels[i] = imgOrig.pixels[i+offset];
  }
  img.updatePixels();
}

function draw() {
  background(0);
  image(img, 5, 5);
}