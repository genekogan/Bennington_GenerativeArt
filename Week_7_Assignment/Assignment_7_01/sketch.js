var originalImage, thresholdImage, invertImage, tintedImage;
 
function setup() {
  createCanvas(1600, 600);
  
  originalImage = loadImage("monalisaKid.jpg");
  thresholdImage = loadImage("monalisaKid.jpg");
  grayImage = loadImage("monalisaKid.jpg"); 
  tintedImage = loadImage("monalisaKid.jpg");
}
 
function draw() {
  background(0);
  
  thresholdImage.filter("threshold", 0.5);
  grayImage.filter("gray"); 
  
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseY, 0, height, 0, 255);
  b = random(255);
  
  
   // display images
  image(originalImage, 0, 0); 
  image(thresholdImage, 400, 0);  
  tint(mouseX, mouseY, b);
  image(grayImage, 800, 0);
  tint(r, g, b);
  image(tintedImage, 1200, 0)
  
  
  // display text labels
  fill(255);
  noStroke();
  text('Original', 25, height - 50);
  text('Threshhold', 425, height - 50);
  text('Greyscale', 825, height - 50);
  text('Tinted', 1225, height -50);
}



/*
function monalisaImage(){
  this.draw = function() {
    image(img, mouseX, mouseY);
  }
}
*/