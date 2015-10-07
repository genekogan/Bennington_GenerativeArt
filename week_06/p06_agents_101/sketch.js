var a;

function setup() {
  createCanvas(800, 800);
  a = new Agent();
}

function draw() {
  background(0);
  a.update();
  a.draw();
}

function Agent() {
  this.position = {x:300, y:350}; // position of the agent
  this.velocity = {x:1, y:1};     // velocity (speed) of the agent
  this.radius = 250;              // radius of the agent
  
  // add velocity to the position to move the circle
  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  
  // draw the agent
  this.draw = function() {
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
}