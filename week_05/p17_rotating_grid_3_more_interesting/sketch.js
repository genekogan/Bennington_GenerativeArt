function setup() {
  createCanvas(1000, 900);
  rectMode(CENTER);
}

function draw() {
  background(0);

  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {

      var angle = map(noise(i, j, frameCount*0.01), 0, 1, 0, TWO_PI);
      var w = map(sin(i*j + frameCount*0.03), -1, 1, 0, 150);
      var h = map(sin(i*j + frameCount*0.02), -1, 1, 0, 150);

      fill(255, 150);
      
      push();
      
      translate(100*i, 100*j);
      rotate(angle);
      rect(0, 0, w, h);
      
      rotate(0.1);
      rect(0, 0, w, h); // make another one slightly rotated from the first one
      
      pop();
      
    }
  }

}
