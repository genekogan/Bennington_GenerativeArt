

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(255);

  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      var size = 3 * (i + j);
      var r = i * 20;
      var g = 50;
      var b = j * 20;
      fill(r, g, b)
      ellipse(50 + i * 70, 50 + j * 70, size, size);
    }
  }
  
}