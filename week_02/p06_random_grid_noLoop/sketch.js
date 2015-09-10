function setup() {
  createCanvas(800, 800);
  
  // if you call noLoop in setup, then draw() will run exactly once
  noLoop();
}

function draw() {
  
  background(0);
  
  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      
      var x = 20 + 80*i + random(-10, 10);
      var y = random(20) + 80*j;
      
      fill(255);
      rect(x, y, 50, 50);
      
    }
  }


}