var h1, h2;

function setup() {
  createCanvas(800, 800);
  h1 = new House(400, 550);
  h2 = new House(120, 250);
}

function draw() {
  // we can still change the values of the attributes 
  h1.x = mouseX;
  h1.size = mouseY;
  
  background(0);
  h1.draw();
  h2.draw();
}

function House(x_, size_) {   // we can take arguments in the class constructor

  this.x = x_;     // position variable
  this.size = size_;  // size of the house variable
  
  this.draw = function() {
    noFill();
    stroke(255);
    rect(this.x, height-this.size, 200, this.size);
    triangle(this.x - 40, height-this.size, this.x + 240, height-this.size, this.x + 100, height-this.size-150);
    rect(this.x + 100, height-this.size+100, 80, 100);
  }; 
};
