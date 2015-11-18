var agents = [];

var numAgents = 100;
var maxSpeed = 2;
var minRadius = 20;
var maxRadius = 80;

function setup() {
  createCanvas(1440, 900);
  
  for (var i=0; i<numAgents; i++) {
    var a = new Agent(random(width), random(height), random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed), random(minRadius, maxRadius));
    agents.push(a);
  }

  background(0);
}

function draw() {
  // update loop for the agents
  for (var i=0; i<agents.length; i++) {
    // update the agents position
    agents[i].update(); 

    agents[i].intersectingAgents = [];

    
    for (var j=i+1; j<agents.length; j++) {

      if (checkIfAgentsIntersecting(agents[i], agents[j])) {

        agents[i].intersectingAgents.push(agents[j]);
        agents[j].intersectingAgents.push(agents[i]);
      }
    }
  }

  for (var i=0; i<agents.length; i++) {

    if (agents[i].intersectingAgents.length == 3) {
      var intersectingAgent1 = agents[i].intersectingAgents[0];
      var intersectingAgent2 = agents[i].intersectingAgents[1];
      var intersectingAgent3 = agents[i].intersectingAgents[2];
      
      stroke(random(55), random(255), random(255), 20);
      noFill();
      bezier(agents[i].position.x, agents[i].position.y, 
      intersectingAgent1.position.x, intersectingAgent1.position.y, 
      intersectingAgent2.position.x, intersectingAgent2.position.y, 
      intersectingAgent3.position.x, intersectingAgent3.position.y);
    }
    
  }
}


function checkIfAgentsIntersecting(a, b) {    // a and b are agents
  var d = dist(a.position.x, a.position.y, b.position.x, b.position.y);
  if (d < a.radius + b.radius) {
    return true;
  }
  else {
    return false;
  }
}


function Agent(x_, y_, vx_, vy_, rad) {
  this.position = {x:x_, y:y_};   // position of the agent
  this.velocity = {x:vx_, y:vy_}; // velocity (speed) of the agent
  this.radius = rad;              // radius of the agent
  this.intersectingAgents = [];   // an array of the other agents which are intersecting with this agent
  
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
    ellipse(this.position.x, this.position.y, 2 * this.radius, 2 * this.radius);
    var angle = atan2(this.velocity.y, this.velocity.x);
    line(this.position.x, this.position.y, this.position.x + this.radius * cos(angle), this.position.y + this.radius * sin(angle));
  }
}