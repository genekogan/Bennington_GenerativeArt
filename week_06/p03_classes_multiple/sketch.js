var h1, h2;

function setup() {
  createCanvas(800, 800);
  h1 = new House();
  h2 = new House();
  
  // we can change h2's internal state by modifying its local variables
  h2.x = 120;
  h2.size = 250;
}

function draw() {
  
  h2.x = mouseX;
  
  background(0);
  h1.draw();
  h2.draw();
}

function House() {
  this.x = 400;     // position variable
  this.size = 550;  // size of the house variable
  
  this.draw = function() {
    noFill();
    stroke(255);
    rect(this.x, height-this.size, 200, this.size);
    triangle(this.x - 40, height-this.size, this.x + 240, height-this.size, this.x + 100, height-this.size-150);
    rect(this.x + 100, height-this.size+100, 80, 100);
  }; 
};
