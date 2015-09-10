function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  
  var x = random(width);
  var y = random(height);
  var w = random(100, 500);
  var h = random(100, 300);
  
  var r = random(120, 255);
  var g = random(100);
  var b = random(120, 255);
  var a = random(50, 100);
  
  fill(r, g, b, a);
  
  var t = random(1);
  
  if (t < 0.5) {
    rect(x, y, w, h);
  }
  else {
    ellipse(x, y, w, h);
  }
  
}