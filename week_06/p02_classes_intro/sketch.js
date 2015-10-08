var h;

function setup() {
  createCanvas(800, 800);
  h = new House();
}

function draw() {
  background(0);
  h.draw();
}


// a class is a datatype in object-oriented languages
// which has the following:
//  - attributes (properties/fields/variables)
//  - methods (functions)

function House() {
  
  // the local variable x (of the class house)
  // is it's left-right position
  this.x = 400;
  this.size = 550;
  
  this.draw = function() {
    noFill();
    stroke(255);
    rect(this.x, height-this.size, 200, this.size);
    triangle(this.x - 40, height-this.size, this.x + 240, height-this.size, this.x + 100, height-this.size-150);
    rect(this.x + 100, height-this.size+100, 80, 100);
  }; 
};

