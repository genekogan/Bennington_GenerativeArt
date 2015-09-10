function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  
  for (var i=0; i<10; i++) {
    for (var j=0; j<10; j++) {
      
      var x = 20 + 80*i;
      var y = 20 + 80*j;
      
      var r = random(50, 255);
      var g = random(40, 255);
      var b = random(220);
      
      var r = random(100);
      
      fill(r, g, b, 30);
      rect(x, y, r, 40);
      
    }
  }


}