var n, m;
var progress;

var mic;

var level;

function setup() {
  createCanvas(1000, 900);
  
  n = 10;
  m = 8;
  
  progress = 0;
  mic = new p5.AudioIn();
  mic.start();
  
  level = 0;
}

function draw() {
  
  var currentLevel = mic.getLevel();
  
  level = lerp(level, currentLevel, 0.1);
  
  progress += 3 * level;
  
  background(255);
  fill(0, 50);

  translate(width/2, height/2);
  for (var i=0; i<n; i++) {
    var angle = map(i, 0, n, 0, TWO_PI);
    var t1 = map(sin(0.03*progress), -1, 1, -300, 300);
    push();
    rotate(angle + 0.01*progress);
    translate(t1, 0);
    for (var j=0; j<m; j++) {
      var angle2 = map(j, 0, m, 0, TWO_PI);
      var t2 = map(sin(-0.02*progress), -1, 1, -200, 200);
      var w = map(sin(0.01*progress), -1, 1, -100, 100);
      var h = map(sin(0.01*progress), -1, 1, -100, 100);
      push();
      rotate(angle2 - 0.02*progress);
      translate(t2, 0);
      chakraBlade();
      pop();
    }
    pop();
  }
}


function chakraBlade() {
  fill(random(255), random(255), mouseX);
  ellipse(100, 100, 10, 200);
  
}  
