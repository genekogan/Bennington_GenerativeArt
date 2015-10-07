var a, a2, a3;

function setup() {
  createCanvas(800, 800);
  
  a = new Agent(random(width), random(height), random(-1, 1), random(-1, 1), 200);
  a2 = new Agent(random(width), random(height), random(-1, 1), random(-1, 1), 200);
  a3 = new Agent(random(width), random(height), random(-1, 1), random(-1, 1), 200);
}

function draw() {
  background(0);
  
  a.update();
  a.draw();

  a2.update();
  a2.draw();

  a3.update();
  a3.draw();

}

function Agent(x_, y_, vx_, vy_, rad) {
  this.position = {x:x_, y:y_};   // position of the agent
  this.velocity = {x:vx_, y:vy_}; // velocity (speed) of the agent
  this.radius = rad;              // radius of the agent
  
  // add velocity to the position to move the circle
  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  
  // draw the agent
  this.draw = function() {
    noFill();
    stroke(255);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
}