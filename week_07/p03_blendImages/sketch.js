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
  
  // arguments for blend
  // blend(srcImage, sx, sy, sw, sh, dx, dy, dw, dh, blendMode)
  // srcImage -> the image you are blending
  // sx, sy, sw, sh -> the region of srcImage to blend with
  // dx, dy, dw, dh -> the destination pixels onto which to apply the blended srcImage
  
  // all the different blend modes listed here: http://p5js.org/reference/#/p5/blend
  blend(img2, 0, 0, img2.width, img2.height, 5, 5, img1.width, img1.height, LIGHTEST);
}