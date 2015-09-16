var num_x;
var num_y;
var size;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  textSize(20);
  
  // create and call our own function
  setVariables();
}

function setVariables() {
  num_x = random(20, 50);
  num_y = random(20, 50);
}

function draw() {
  background(0);

  // "outer loop" is i
  // "inner loop" is j
  // i=0, j=0
  // i=0, j=1
  // i=0, j=2
  // i=0, j=3
  // ....
  // i=0, j=num_y-1
  // i=1, j=0
  // i=1, j=1
  // i=1, j=2
  // i=1, j=3
  // ...
  // i=1, j=num_y-1
  // i=2, j=0
  // i=2, j=1
  // i=2, j=2
  // ...
  // ...
  // i=num_x-1, j=num_y-1
  // -> loop terminates

  var zoomx = map(mouseX, 0, width, 0, 2);
  var zoomy = map(mouseY, 0, height, 0, 2);

  for (var i=0; i<num_x; i++) {
    for (var j=0; j<num_y; j++) {
      
      var x = map(i, 0, num_x, 0, width);
      var y = map(j, 0, num_y, 0, height);

      var r = map(sin(frameCount*0.1+2*x-4*y), -1, 1, 0, 255);
      var g = map(sin(zoomx*i), -1, 1, 0, 255);
      var b = map(sin(zoomy*j), -1, 1, 0, 255);
      fill(r, g, b, 100);
      
      size = map(sin(frameCount*0.2+x+y), -1, 1, 0, 50);
      rect(x, y, size, size);
      
    }
  }  
}

function keyPressed() {
  if (key==' ') {
    setVariables();
  }
}