function setup() {
  createCanvas(1000, 900);
  ellipseMode(CENTER);
}

function draw() {
  background(0);
  
  for(var i =0; i<20; i++){
    translate(300, 300);
    scale(1.10, 1.10);
    chakraBlade(70);
  }
}


// Assignment code

function chakraBlade(x) {
  fill(random(255));
  rotate(mouseX*0.008);
  ellipse(noise(x), 80, 10, 200);
}  
