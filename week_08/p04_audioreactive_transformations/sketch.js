// this is an adaptation of the code made in week 5 in the 
// example called p27_radial_symmetry_two_levels_4.
// instead of using frameCount to drive forward the visuals,
// we create a new variable progress, which increments
// depending on the loudness of our microphone

var n, m;
var progress;

var mic;
var level;

function setup() {
  createCanvas(1000, 900);
  
  n = 5;
  m = 4;
  
  progress = 0;
  
  mic = new p5.AudioIn();
  mic.start();
  
  level = 0;
}

function draw() {
  // first we get the microphone's current level
  var currentLevel = mic.getLevel();
  
  // we can make level be the same as currentLevel or
  // we can make it a little smoother by using lerp
  level = lerp(level, currentLevel, 0.1);
  
  // then we add the level to progress 
  progress = progress + 5.0*level;
  
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
      noisyBezier();
      //rect(0, 0, 100, 100);
      pop();
    }
    pop();
  }
}

function noisyBezier() {
  fill(0, 15);
  var x1 = map(noise(0.01*progress+15), 0, 1, -500, 500);
  var x2 = map(noise(0.01*progress+25), 0, 1, -500, 500);
  var x3 = map(noise(0.01*progress+35), 0, 1, -500, 500);
  var x4 = map(noise(0.01*progress+45), 0, 1, -500, 500);
  var y1 = map(noise(0.01*progress+55), 0, 1, -500, 500);
  var y2 = map(noise(0.01*progress+65), 0, 1, -500, 500);
  var y3 = map(noise(0.01*progress+75), 0, 1, -500, 500);
  var y4 = map(noise(0.01*progress+85), 0, 1, -500, 500);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}