function setup() {
  createCanvas(1000, 900);
  noFill();
  stroke(255);
}

function draw() {
  background(0);

  for (var j=0; j<12; j++) {
    push();
    translate(0, 80 * j);
    for (var i=0; i<12; i++) {
      push();
      translate(80 * i, 0);
      scale(sin(i), sin(j));
      collectionOfShapes();
      pop();
    }
    pop();
  }
}

// this is pretty much random
function collectionOfShapes() {
  ellipse(0, 0, 100, 50);
  rect(20, 20, 80, 45);
  triangle(-10, -5, -20, 15, 40, 25);
  bezier(100, -40, -200, -100, 50, 200, 25, 50);
}