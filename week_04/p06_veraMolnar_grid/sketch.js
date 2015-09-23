var nx, ny;

var points = [];

function setup() {
  createCanvas(800, 800);
  textSize(24);
  nx = 4;
  ny = 4;
  
  // we will put our points into an array
  // point 0: (0, 0)
  // point 1: (1, 0)
  // point 2: (2, 0)
  // point 3: (3, 0)
  // point 4: (0, 1)
  // point 5: (1, 1)
  // point 6: (2, 1)
  // etc
  
  for (var j=0; j<ny; j++) {
    for (var i=0; i<nx; i++) {
      var px = map(i, 0, nx-1, 100, width-100);
      var py = map(j, 0, ny-1, 100, height-100);
      var p = {x:px, y:py};
      points.push(p);
    }
  }
}

function draw() {
  background(255);
  for (var i=0; i<points.length; i++) {
    ellipse(points[i].x, points[i].y, 10, 10);
    text(i, points[i].x+5, points[i].y+5);
  }
}