function setup() {
  createCanvas(800, 800);
  textSize(36);
}

function draw() {
  background(255);
  
  var zoom = mouseY * 0.0001;
  
  noFill();
  strokeWeight(4);
  beginShape();
  for (var i=0; i<width; i++) {
    var angle = i * zoom;
    var value = sin(angle);
    vertex(i, 400 + 200 * value);
  }
  endShape();
  
  var angle = mouseX * zoom;
  var value = sin(angle);
  var y = 400 + 200 * value;  // oscillate between 200 and 600
  
  fill(0);
  text("angle = "+angle, 20, 30);
  text("sin(angle) = "+sin(angle), 20, 65);
  text("y = "+y, 20, 100);
  
  fill(255, 0, 0);
  ellipse(mouseX, y, 20, 20);
  
}