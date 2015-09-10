function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  background(0);
  
  var m = 0.01 * mouseX;
  var x = sin(m);
  
  ellipse(400 + 400 * x, 400, 100, 100);
  
  textSize(24);
  fill(255);
  text("mouse: "+mouseX, 20, 20);
  text("var m = "+m, 20, 40);
  text("sin(m) = "+x, 20, 60);

}