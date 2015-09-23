function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noFill();

  for (var i=0; i<40; i++) {
    var size = random(700);
    rect(width/2, height/2, size, size);
  }
}