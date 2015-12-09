var img;
var indexFilter;

function preload() {
  img = loadImage("starrynight.jpg");
  indexFilter = 0;
}

function setup() {
  createCanvas(1280, 800);
}

function draw() {
  background(0);
  
  image(img, 0, 0);
  
  if (indexFilter == 0) {
    filter(THRESHOLD, map(mouseX, 0, width, 0, 1));
  }
  else if (indexFilter == 1) {
    filter(GRAY);
  }
  else if (indexFilter == 2) {
    filter(INVERT);
  }
  else if (indexFilter == 3) {
    filter(POSTERIZE, map(mouseX, 0, width, 2, 10));
  }
  else if (indexFilter == 4) {
    filter(BLUR, map(mouseX, 0, width, 1, 10));
  }
  else if (indexFilter == 5) {
    filter(ERODE);
  }
  else if (indexFilter == 6) {
    filter(DILATE);
  }
}

function keyPressed() {
  if (keyCode==LEFT_ARROW) {
    indexFilter = indexFilter-1;
    if (indexFilter < 0) {
      indexFilter = 6;
    }
  }
  else if (keyCode==RIGHT_ARROW) {
    indexFilter = indexFilter+1;
    if (indexFilter > 6) {
      indexFilter = 0;
    }
  }
}