function setup() {
  createCanvas(1280, 800);
  
  var n = 200;
  
  // i++ is the same as i+=1 is the same as i=i+1
  
  for (var i=0; i<n; i++) {
    
    // to make things that increment with the loop, or
    // are functionally dependent on i:
    
    // let our x variable (the center point of the ellipse to be drawn)
    // increment by 6 with each iteration of the loop
    var x = 20 + 6 * i;
    
    // let the radius of the ellipse we draw be a random number between
    // 0 and i * 5.  so each iteration of the loop, the maximum bound of the
    // random radius is increased by 5
    var rad = random(i * 5);
    
    // let the color be also dependent on i.  
    // let's make it a shade of red
    var r = i;
    fill(r, 255-i, 0);
    
    // draw the ellipse
    ellipse(x, 400, 5, rad);
    
  }
  
}

function draw() {
  
}