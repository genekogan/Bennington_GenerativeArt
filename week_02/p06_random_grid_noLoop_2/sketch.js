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
      var rad1 = random(50);
      var rad2 = random(20);
      
      fill(255);
      ellipse(x, y, rad1, rad1);
      
      fill(0);
      ellipse(x, y, rad2, rad2);
      
    }
  }


}