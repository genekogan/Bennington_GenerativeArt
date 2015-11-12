function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  //ellipse(100, 100, 100, 100);

  translate(0, 0, -500);

  var t1x = map(sin(0.012 * frameCount + 5), -1, 1, -300, 300);
  var t1y = map(sin(0.011 * frameCount + 10), -1, 1, -300, 300);
  var t1z = map(sin(0.014 * frameCount + 30), -1, 1, -300, 300);
  var t2x = map(sin(0.013 * frameCount + 15), -1, 1, -300, 300);
  var t2y = map(sin(0.009 * frameCount + 20), -1, 1, -300, 300);
  var t2z = map(sin(0.015 * frameCount + 35), -1, 1, -300, 300);

  var xang = map(sin(0.008 * frameCount + 40), -1, 1, 0, TWO_PI);
  var coneRad = map(sin(0.016 * frameCount + 25), -1, 1, -200, 200);
  var coneHeight = map(sin(0.018 * frameCount + 55), -1, 1, -200, 200);

  for (var i=0; i<8; i++) {
    push();
    var ang = map(i, 0, 8, 0, TWO_PI);
    rotateZ(ang);
    
    translate(t1x, t1y, t1z);
    rotateX(xang);

    for (var j=0; j<5; j++) {
      push();
      var ang2 = map(j, 0, 5, 0, TWO_PI);
      rotateY(ang2);
      translate(t2x, t2y, t2z);
      box(coneRad, coneHeight);
      pop();
    }
    pop();
  }  

}