function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  
  
  // we can make 5 ellipses the following way
  // but it's pretty tedious
  /*
  ellipse(50, 250, 50, 50);
  ellipse(100, 250, 50, 50);
  ellipse(150, 250, 50, 50);
  ellipse(200, 250, 50, 50);
  ellipse(250, 250, 50, 50);
  */
  
  // it would be better to do this using a "for loop"
  // a loop is structured as follows:
  // for ( initialization statement, termination statement, iteration statement)
  // the first statement a counter variable... often we use "i" but you can name it
  // anything you want.
  // the third statement runs at the end of each instance of the loop --
  // almost always we increment the counter, "i++".
  // this means the variable i counts: 0, 1, 2, 3, 4
  // the for loop will continue to loop as long as the middle statement
  // (the termination statement) is true.
  // so once i has been incremented to 5, the statement i < 5 (5 < 5) is
  // no longer true, and the loop terminates, and the code continues to after 
  
  for (var i = 0; i < 5; i++) {
    ellipse(50 + 50 * i, 250, 50, 50);
  }
  // the first time the loop runs, i is 0, so the first argument is 50
  // second time, i is 1, so first argument is 100, and so on
  
  
  // most of the time, a for loop just looks like:
  // for (var i = 0; i < numberOfTimesToRun; i++)
}