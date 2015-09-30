function setup() {
  createCanvas(1000, 900);
}

function draw() {
  background(0);


  translate(width/2, height/2);
  
  ellipse(0, 0, 100, 100);
  
  
  for (var i=0; i<100; i++) {
    push();
    rotate(i*frameCount*0.001);
    fill(255, 120);
    ellipse(i*5, 0, 50, 50);
    pop();
  }
}
