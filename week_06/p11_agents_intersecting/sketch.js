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
  
  // for each agent
  for (var i=0; i<agents.length; i++) {
    
    // first update the agent's position
    agents[i].update();
    
    // set the color of the stroke to be white
    stroke(255);
    
    // then see if the agent is intersecting with any other agent (except itself!)
    for (var j=0; j<agents.length; j++) {
      if (i != j) {   // make sure not to compare agent i to itself!!
        var intersect = checkIfAgentsIntersecting(agents[i], agents[j]);
        
        // if it's intersecting with another agent, color red
        if (intersect) {
          stroke(255, 0, 0);
        }
      }
    }    
    
    agents[i].draw();
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