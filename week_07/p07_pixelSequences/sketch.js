var img;

function preload() {
  img = loadImage("starrynight.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  img.loadPixels();
  var numPixels = img.width * img.height;
  for (var i=0; i<numPixels; i++) {
    var j = (floor(i * 1.00002)) % numPixels;
    img.pixels[4*i] = img.pixels[4*j]
    img.pixels[4*i+1] = img.pixels[4*j+1];
    img.pixels[4*i+2] = img.pixels[4*j+2];
    img.pixels[4*i+3] = img.pixels[4*j+3];
  }
  img.updatePixels();
  
  background(0);
  image(img, 5, 5);
}