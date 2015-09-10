var myColor;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  myColor = color(255, 0, 0);
}

function draw() {
  background(myColor);
  
  fill(255);
  text("press the spacebar", 200, 200);
}

function keyPressed() {
  if (key == ' '){
    myColor = color(random(255), random(255), random(255));
  }
}