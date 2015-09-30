function setup() {
  createCanvas(1000, 900);
  rectMode(CENTER);
}

function draw() {
  background(0);

  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      push();
      translate(100*i, 100*j);
      rotate(0.005 * i * j * frameCount);
      rect(0, 0, 50, 50);
      pop();
    }
  }

}
