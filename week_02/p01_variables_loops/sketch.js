// declare the variable x. tell p5 it exists
var x;

function setup() {
  createCanvas(800, 800);
  
  // initialize the value of the variable x
  x = 5;
}

function draw() {
  
  // the for loop has three segments
  // 1) initialize a counter variable (var i=0;)
  // 2) condition under which the loop runs (i<8;) 
  //    -- if condition fails, e.g. i>=8, then loop terminates
  // 3) increment the counter variable
  
  background(0);
  fill(255);
  
  for (var i=0; i < 30; i++) {
    ellipse(x, 100 + 20 * i, 100, 100);
  }
  
  
  x = x + 5;  // another way to write this:  x += 5
  
  
  // "if" statement
  // if the condition is true, run the code inside.
  // e.g. if x goes bigger than the width of the canvas, set it back to 0
  if (x > width) {
    x = 0;
  }
}