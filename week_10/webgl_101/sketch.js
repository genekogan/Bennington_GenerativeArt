function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  //ellipse(100, 100, 100, 100);
  

  rotateX(mouseX/100);
  rotateY(mouseY/100);
  translate(0, 0, 0);
  cone(100, 500);
  
}