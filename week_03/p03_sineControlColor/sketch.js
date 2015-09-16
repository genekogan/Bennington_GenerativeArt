function setup() {
  createCanvas(800, 800);
  textSize(36);
}

function draw() {
  background(255);
  
  var zoom = mouseY * 0.0001;
  
  
  for (var i=0; i<width; i++) {
    var angle = i * zoom;
    var value = sin(angle);
    
    // line draws from x1, y1 to x2, y2
    // this makes a vertical line at every point x=i
    var r = map(value, -1, 1, 0, 255);
    stroke(r, 0, 0);
    line(i, 200, i, 400);
    
  }

  var angle = mouseX * zoom;
  var value = sin(angle);
  var r = map(value, -1, 1, 0, 255);
  
  fill(0);
  text("angle = "+angle, 20, 30);
  text("sin(angle) = "+value, 20, 65);
  text("r (red) = "+r, 20, 100);
  
}