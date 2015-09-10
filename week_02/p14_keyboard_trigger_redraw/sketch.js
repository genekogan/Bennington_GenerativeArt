function setup() {
  createCanvas(800, 800);
  noLoop();
  
  // rectMode toggles whether the first two arguments x, y in
  // rect(x, y, width, height) refer to the top-left point of the
  // rectangle or the center point of the rectangle
  rectMode(CENTER);
}

function draw() {
  background(0);

  var num_x = random(3, 24);
  var num_y = random(3, 24);

  for (var i=0; i<num_x; i++) {
    for (var j=0; j<num_y; j++) {
      var x = map(i, 0, num_x, 0, width);
      var y = map(j, 0, num_y, 0, height);
      var size = random(50, 100);
      fill(255, 80);
      rect(x, y, size, size);
    }
  }  
}

function keyPressed() {
  if (key == ' '){
    // redraw() can be used to force the function draw()
    // to run exactly once if you are in noLoop()
    redraw();
  }
}