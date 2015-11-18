// no.2 - write a script from scratch using noise, sineCurve and lerp functions

function setup() {
  createCanvas(1000, 1000);
  ellipseMode(CENTER);
  background(0);
  noStroke();
}

function setVariables(){
  
}

function draw(){
  translate(500, 500);
  for (var i=0; i<50; i++) {
    for (var j=0; j<50; j++)
    var size = random(700);
    
    var x = map(sin(0.01 * i * frameCount), -1, 1, -20, 20);
    var y = random(100) * noise(10);
    
    var r = random(250);
    var g = random(250);
    var b = random(250);
    
    fill(r, g, b);
    ellipse(x, y, size, lerp(x, y, 10));
    
  }
}