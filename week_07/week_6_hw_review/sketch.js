var agents = [];

// make a variable to see the number of these agents we have
var numAgents = 500;
var maxSpeed = 2;
var minRadius = 20;
var maxRadius = 250;

function setup() {
  createCanvas(1440, 900);
  
  // HW: spawning strategy -- spawn 
  
  for (var i=0; i<numAgents; i++) {
    var a = new Agent(width/2, height/2, random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed), random(minRadius, maxRadius));
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
    
    
    // HW: draw bezier (4 agents) instead of a triangle (3 agents)
    
    
    // check if we have two intersecting agents.  if so, we 
    // connect them with a triangle
    if (agents[i].intersectingAgents.length == 3) {
      var intersectingAgent1 = agents[i].intersectingAgents[0];
      var intersectingAgent2 = agents[i].intersectingAgents[1];
      var intersectingAgent3 = agents[i].intersectingAgents[2];
      
      // HW: add a color strategy
      var r = map(sin(0.011*frameCount), -1, 1, 0, 255);
      var g = map(sin(0.013*frameCount+5), -1, 1, 0, 255);
      var b = map(sin(0.012*frameCount+10), -1, 1, 0, 255);
      
      stroke(r, g, b, 20);
      noFill();
      bezier(agents[i].position.x, agents[i].position.y, intersectingAgent1.position.x, intersectingAgent1.position.y, intersectingAgent2.position.x, intersectingAgent2.position.y, intersectingAgent3.position.x, intersectingAgent3.position.y);
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
    this.radius = this.radius * 0.999;
  }
  
  // HW: change the wrapping function so instead of wrapping
  // around we go back to the center
  
  // wrapping function to wrap the agent around the screen
  // if it goes off of it
  this.wrap = function() {
    if (this.position.x > width) {
      this.position.x = width/2;
      this.position.y = height/2;
    }
    if (this.position.x < 0) {
      this.position.x = width/2;
      this.position.y = height/2;
    }
    if (this.position.y > height) {
      this.position.x = width/2;
      this.position.y = height/2;
    }
    if (this.position.y < 0) {
      this.position.x = width/2;
      this.position.y = height/2;
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