var agents = [];

// make a variable to see the number of these agents we have
var numAgents = 300;
var maxSpeed = 2;
var minRadius = 5;
var maxRadius = 20;

function setup() {
  createCanvas(1440, 900);
  
  for (var i=0; i<numAgents; i++) {
    var a = new Agent(random(width), random(height), random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed), random(minRadius, maxRadius));
    agents.push(a);
  }
  
  // clear screen to black once
  background(0);
}

function draw() {
  // update loop for the agents
  for (var i=0; i<agents.length; i++) {
    // update the agents position
    agents[i].update(); 
    
    // before we do the comparison, let's clear (empty) each agents'
    // intersectingAgents list, so that it only holds the intersecting
    // agents at that frame and not all previous frames
    agents[i].intersectingAgents = [];
    
    // then we loop through all of the other agents, and add them
    // to agent[i]'s list of intersecting agents if they intersect.
    
    // by starting the j-loop at j=i+1, we avoid comparing
    // combinations of agents more than once, and end up comparing every
    // agent to every other agent exactly once, i.e.
    // (0, 1), (0, 2), (0, 3).... (1, 2), (1, 3), (1, 4).... (2, 3), (2, 4) .... so on
    
    for (var j=i+1; j<agents.length; j++) {
      // check if agent i and agent j are intersecting
      if (checkIfAgentsIntersecting(agents[i], agents[j])) {
        // if agent i and agent j are intersecting, add them
        // to each others intersectingAgents arrays
        agents[i].intersectingAgents.push(agents[j]);
        agents[j].intersectingAgents.push(agents[i]);
      }
    }
  }
  
  // at the end of this update loop, each agent has a list of the other
  // agents which it intersects with in the array intersectingAgents
  
  // now instead of simply drawing the agents,
  // let's draw a line connecting the centers of any intersecting agents
  for (var i=0; i<agents.length; i++) {
    // loop through each of the agents inside this agent's intersectingAgents list
    for (var j=0; j<agents[i].intersectingAgents.length; j++) {
      // for each agent in the current agent's intersectingAgents list ("other"),
      // draw a green line connecting it's center to the center of the current agent
      var other = agents[i].intersectingAgents[j];
      stroke(255, 50);            
      line(agents[i].position.x, agents[i].position.y, other.position.x, other.position.y);
    }
  }
}

// this function will take two agents as input and return true/false
// depending on if they are intersecting (see p10_intersecting_circles)
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