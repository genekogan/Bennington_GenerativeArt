var agents = [];

function setup() {
  createCanvas(800, 800);
  
  for (var i=0; i<10; i++) {
    var a = new Agent(random(width), random(height), random(-1, 1), random(-1, 1), 50);
    agents.push(a);
  }
}

function draw() {
  background(0);
  
  for (var i=0; i<agents.length; i++) {
    agents[i].update();
    agents[i].draw();
  }
}

function Agent(x_, y_, vx_, vy_, rad) {
  this.position = {x:x_, y:y_};   // position of the agent
  this.velocity = {x:vx_, y:vy_}; // velocity (speed) of the agent
  this.radius = rad;              // radius of the agent
  
  // add velocity to the position to move the circle
  this.update = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.wrap();
  }
  
  // wrapping function to wrap the agent around the screen
  // if it goes off of it
  this.wrap = function() {
    if (this.position.x > width) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
    }
  }
  
  // draw the agent
  this.draw = function() {
    noFill();
    stroke(255);
    ellipse(this.position.x, this.position.y, 2 * this.radius, 2 * this.radius);
    var angle = atan2(this.velocity.y, this.velocity.x);
    line(this.position.x, this.position.y, this.position.x + this.radius * cos(angle), this.position.y + this.radius * sin(angle));
  }
}