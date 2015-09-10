function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  
  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      
      var x = 20 + 80*i;
      var y = 20 + 80*j;
      
      var r = random(20, 100);
      
      fill(255, 30);
      ellipse(x, y, r, r);
      
    }
  }


}