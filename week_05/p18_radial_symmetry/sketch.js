function setup() {
  createCanvas(1000, 900);
}

function draw() {
  background(0);


  translate(width/2, height/2);
  
  ellipse(0, 0, 100, 100);
  
  
  rotate(0.01*mouseX);
  ellipse(100, 0, 50, 50);

}
