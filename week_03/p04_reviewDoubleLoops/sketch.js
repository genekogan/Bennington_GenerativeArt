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
  num_x = random(4, 15);
  num_y = random(4, 15);
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

  for (var i=0; i<num_x; i++) {
    for (var j=0; j<num_y; j++) {
      
      var x = map(i, 0, num_x, 0, width);
      var y = map(j, 0, num_y, 0, height);

      fill(255);
      text("i="+i+",j="+j, x, y);
    }
  }  
}

function keyPressed() {
  if (key==' ') {
    setVariables();
  }
}