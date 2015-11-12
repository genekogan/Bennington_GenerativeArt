function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  //ellipse(100, 100, 100, 100);

  for (var i=0; i<8; i++) {
    push();
    var ang = map(i, 0, 8, 0, TWO_PI);
    rotateZ(ang);
    translate(400, 0, -100);
    
    var xang = map(noise(0.01*frameCount), 0, 1, 0, TWO_PI);
    rotateX(xang);
    box();
    pop();
  }  

}