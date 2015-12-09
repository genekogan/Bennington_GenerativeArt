var img;

function preload() {
  img = loadImage("starrynight.jpg");
}

function setup() {
  createCanvas(800, 800);
  
  // calling loadPixels gives you access to the individual pixels of an image
  // if you forget to call loadPixels, you can't access the pixels variable
  img.loadPixels();
  
  // number of pixels = width x height
  var numPixels = img.width * img.height;
  
  // the pixels array contains the r, g, b, and alpha values consecutively for each pixel
  // thus the first pixel starts at 0, the second pixel starts at 4, and so on...
  // so the pixels array looks like this:
  // 0: pixel 0 red
  // 1: pixel 0 green
  // 2: pixel 0 blue
  // 3: pixel 0 alpha
  // 4: pixel 1 red
  // 5: pixel 1 green
  // 6: pixel 1 blue
  // 7: pixel 1 alpha
  // 8: pixel 2 red
  // 9: pixel 2 green
  //10: pixel 2 blue
  //11: pixel 2 alpha
  // ....
  
  for (var i=0; i<numPixels; i++) {
    
    // therefore we can grab the r, g, b, and alpha values
    // like so:
    var r = img.pixels[4*i];
    var g = img.pixels[4*i+1];
    var b = img.pixels[4*i+2];
    var a = img.pixels[4*i+3];
  
    // let's swap color channels
    img.pixels[4*i+1] = r; 
    img.pixels[4*i+2] = g; 
    img.pixels[4*i] = b; 
  }
  
  // if you make changes to the pixels, you must not forget to call
  // updatePixels, or the changes do not take effect
  img.updatePixels();
  
  
}

function draw() {
  background(0);
  image(img, 5, 5);
}