

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(255);
    
  
  // we put a for-loop inside a for-loop
  // so the "outer" loop (i) will run 25 times, i=0, i=1, i=2.... i=24
  // and for each i, the "inner" loop (j) will run 25 times, j=0, j=1... j=24
  // so in order, the values of i and j as the double loop iterates will be:
  //  i=0, j=0
  //  i=0, j=1
  //  i=0, j=2
  //  ....
  //  i=0, j=24
  //  i=1, j=0
  //  i=1, j=1
  //  i=1, j=2
  //  ....
  //  ....
  //  i=24, j=22
  //  i=24, j=23
  //  i=24, j=24
  //  loop is done
  
  for (var i=0; i<25; i++) {
    
    for (var j=0; j<25; j++) {
      
      ellipse(i * 30, j * 30, 40, 40);
      
    }
    
  }
  
}