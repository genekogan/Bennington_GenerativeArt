var n, m;

function setup() {
  createCanvas(1000, 900);
  
  n = 5;
  m = 7;
}

function draw() {
  background(255);
  fill(0, 50);

  translate(width/2, height/2);
  ellipse(0, 0, 100, 100);
  for (var i=0; i<n; i++) {
    var angle = map(i, 0, n, 0, TWO_PI);
    var t1 = map(sin(0.03*frameCount), -1, 1, -300, 300);
    push();
    rotate(angle + 0.01*frameCount);
    translate(t1, 0);
    ellipse(0, 0, 50, 50);
    for (var j=0; j<m; j++) {
      var angle2 = map(j, 0, m, 0, TWO_PI);
      var t2 = map(sin(-0.02*frameCount), -1, 1, -200, 200);
      var w = map(sin(0.01*frameCount), -1, 1, -100, 100);
      var h = map(sin(0.01*frameCount), -1, 1, -100, 100);
      push();
      rotate(angle2 - 0.02*frameCount);
      translate(t2, 0);
      collectionOfShapes();
      pop();
    }
    pop();
  }
}

function collectionOfShapes() {
  fill(0, 30);
  ellipse(mouseY, 20, 100, 50);
  rect(20+mouseY, 220-mouseX, 80, mouseX);
  triangle(-100+mouseY, -5, -20, mouseY, 400*sin(0.01*frameCount), 125);
  bezier(100, mouseX, -200, -100-mouseX, 50, mouseY, -225, -150);
}