function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(0);
  
  noFill();
  stroke(255);
  
  // first circle
  var x1 = mouseX;
  var y1 = mouseY;
  var rad1 = 150;
  
  // second circle
  var x2 = 500;
  var y2 = 550;
  var rad2 = 120;
  
  // to tell if two circles intersect:
  // if the distance between their centers is less than
  // the sum of their radii, then they intersect. if it is greater
  // than the sum of their radii, then they do not intersect.
  
  // 1) get the distance
  var d = dist(x1, y1, x2, y2);
  
  // 2) determine if they are intersecting
  if (d < rad1 + rad2) {
    // then they are intersecting, so color red
    stroke(255, 0, 0);
  }
  else {
    // they are not intersecting, so color white
    stroke(255);
  }
  
  
  ellipse(x1, y1, 2*rad1, 2*rad1);    // multiply radius by two because ellipse expects diameter not radius
  ellipse(x2, y2, 2*rad2, 2*rad2);
  
}