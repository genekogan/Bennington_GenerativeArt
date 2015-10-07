var h1, h2;

function setup() {
  createCanvas(800, 800);
  h1 = new House(400, 550);
  h2 = new House(120, 250);
}

function draw() {
  
  background(0);
  h1.draw();
  h2.draw();
}

function keyPressed() {
  if (key==' ') {
    h2.toggleWindow();
  }
}

function House(x_, size_) {   // we can take arguments in the class constructor

  this.x = x_;     // position variable
  this.size = size_;  // size of the house variable

  this.windowRed = false; // draw the window red

  // this function will toggle the value of windowRed, i.e.
  // if windowRed is true, change it to false, and if it is
  // false, change it to true
  this.toggleWindow = function() {
    if (this.windowRed == true) {
      this.windowRed = false;
    }
    else if (this.windowRed == false) {
      this.windowRed = true;
    }
  }
  
  this.draw = function() {
    noFill();
    stroke(255);
    rect(this.x, height-this.size, 200, this.size);
    triangle(this.x - 40, height-this.size, this.x + 240, height-this.size, this.x + 100, height-this.size-150);
    
    // if windowRed is true, color the window red
    if (this.windowRed == true) {
      fill(255, 0, 0);
    }
    rect(this.x + 100, height-this.size+100, 80, 100);
  }; 
};
