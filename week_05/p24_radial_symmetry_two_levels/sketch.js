var n, m;

function setup() {
  createCanvas(1000, 900);
  
  n = 5;
  m = 8;
}

function draw() {
  background(0);

  translate(width/2, height/2);
  ellipse(0, 0, 100, 100);
  for (var i=0; i<n; i++) {
    var angle = map(i, 0, n, 0, TWO_PI);
    push();
    rotate(angle);
    translate(250, 0);
    ellipse(0, 0, 50, 50);
    for (var j=0; j<m; j++) {
      var angle2 = map(j, 0, m, 0, TWO_PI);
      push();
      rotate(angle2);
      ellipse(90, 0, 30, 30);
      pop();
    }
    pop();
  }
}

