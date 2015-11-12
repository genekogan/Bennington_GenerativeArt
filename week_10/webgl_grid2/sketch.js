function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  //ellipse(100, 100, 100, 100);

  translate(0, 0, -500);
  rotateY(mouseX/100);

  var t1x = map(noise(0.01 * frameCount, 5), 0, 1, 0, 300);
  var t1y = map(noise(0.01 * frameCount, 10), 0, 1, -300, 300);
  var t1z = map(noise(0.01 * frameCount, 30), 0, 1, -300, 300);
  var t2x = map(noise(0.01 * frameCount, 15), 0, 1, 0, 300);
  var t2y = map(noise(0.01 * frameCount, 20), 0, 1, 0, 300);
  var t2z = map(noise(0.01 * frameCount, 35), 0, 1, 0, 300);

  var size = map(noise(0.01 * frameCount, 25), 0, 1, 0, 200);

  for (var i=0; i<8; i++) {
    push();
    var ang = map(i, 0, 8, 0, TWO_PI);
    rotateZ(ang);
    
    translate(t1x, t1y, t1z);
    
    var xang = map(noise(0.01*frameCount), 0, 1, 0, TWO_PI);
    rotateX(xang);
    
    
    for (var j=0; j<5; j++) {
      push();
      var ang2 = map(j, 0, 5, 0, TWO_PI);
      rotateY(ang2);
      translate(t2x, t2y, t2z);
      box(size);
      pop();
    }
    
    
    pop();
  }  

}