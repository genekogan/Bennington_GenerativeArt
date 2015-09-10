

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(150, 20, 180, 160);

  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      
      var x1 = i * mouseX;
      var y1 = j * 40;
      var x2 = x1 + 40;
      var y2 = y1 + 30;
      var x3 = i * j * 8;
      var y3 = mouseY;
      
      triangle(x1, y1, x2, y2, x3, y3);
      
    }
  }
  
}