function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  background(0);

  for (var i=0; i<10; i++) {
    var x = 10 + 80*i;
    var y = 400 + 400 * sin(0.01 * i * frameCount);
    
    ellipse(x, y, 30, 30);
  }  

}