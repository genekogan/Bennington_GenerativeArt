var img;  

function setup() {
  createCanvas(800, 600); 
  img = createImage(300, 300);
  img.loadPixels();
  for(var x = 0; x < img.width; x++) {
    for(var y = 0; y < img.height; y++) {
      var idx = map(x, 0, img.width, 255, 0);
      var idy = map(y, 0, img.height, 255, 0)
      img.set(x, y, [x, y, idx, idy]); 
    }
  }
  img.updatePixels();
}

function draw() {
  background(0);
  image(img, 90, 80);
  image(img, mouseX/2, mouseY/2);
}