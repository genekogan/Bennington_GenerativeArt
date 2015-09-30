function setup() {
  createCanvas(1000, 900);
  noFill();
  stroke(255);
}

function draw() {
  background(0);


  for (var j=0; j<3; j++) {
    push();
    translate(0, 250*j);
    
    for (var i=0; i<4; i++) {
      push();
      translate(250 * i, 0);
      drawHouse();
      pop();
    }
    
    pop();
  }

}

function drawHouse() {
  triangle(0, 0, -100, 100, 100, 100);
  rect(-90, 100, 180, 200);
  rect(-50, 210, 30, 90);
  rect( 10, 150, 50, 40);
}