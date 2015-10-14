// let's keep two copies of the image so that destructive operations
// on img can be reverted back to the original (imgOrig) which we never modify

var img;
var imgOrig;

function preload() {
  img = loadImage("starrynight.jpg");
  imgOrig = loadImage("starrynight.jpg");  // let's make a copy of the image
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  // we can do pixel operations on each frame
  
  // calling loadPixels gives you access to the individual pixels of an image
  // if you forget to call loadPixels, you can't access the pixels variable
  imgOrig.loadPixels();
  img.loadPixels();
  
  // number of pixels = width x height
  var numPixels = img.width * img.height;
  
  for (var i=0; i<numPixels; i++) {
    
    // therefore we can grab the r, g, b, and alpha values
    // like so:
    var r = imgOrig.pixels[4*i];
    var g = imgOrig.pixels[4*i+1];
    var b = imgOrig.pixels[4*i+2];
    var a = imgOrig.pixels[4*i+3];
  
    // operate on individual pixels
    if (b < mouseX) {
      img.pixels[4*i+2] = 0;
    }
    else {  // otherwise revert back to original pixel value
      img.pixels[4*i+2] = imgOrig.pixels[4*i+2];
    }
    
    
    if (r < mouseY) {
      img.pixels[4*i] = 0;
    }
    else {  // otherwise revert back to original pixel value
      img.pixels[4*i] = imgOrig.pixels[4*i];
    }
  }
  
  // if you make changes to the pixels, you must not forget to call
  // updatePixels, or the changes do not take effect
  img.updatePixels();
  
  
  background(0);
  image(img, 5, 5);
}