function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noFill();
  
  var numSquares = 100;
  var margin = 20;
  
  for (var i=0; i<numSquares; i++) {
    var size = random(700);
    
    var TL = {x: width/2 - size/2, y: height/2 - size/2};
    var TR = {x: width/2 + size/2, y: height/2 - size/2};

    var BL = {x: width/2 - size/2, y: height/2 + size/2};
    var BR = {x: width/2 + size/2, y: height/2 + size/2};
    
    
    TL.x += random(-margin,margin);  // same as TL.x = TL.x + random(100);
    TL.y += random(-margin,margin);  
    TR.x += random(-margin,margin);
    TR.y += random(-margin,margin);  
    BL.x += random(-margin,margin);
    BL.y += random(-margin,margin);  
    BR.x += random(-margin,margin);
    BR.y += random(-margin,margin);

    //rect(width/2, height/2, size, size);
    
    line(TL.x, TL.y, TR.x, TR.y);
    line(TR.x, TR.y, BR.x, BR.y);
    line(BR.x, BR.y, BL.x, BL.y);
    line(BL.x, BL.y, TL.x, TL.y);
  }
}

function mousePressed() {
  setup();
}