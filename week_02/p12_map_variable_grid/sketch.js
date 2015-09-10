
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(255);
  
  var num_x = mouseX*0.1;
  var num_y = mouseY*0.1;
  
  for (var i = 0; i < num_x; i++) {
    for (var j = 0; j < num_y; j++) {
      
      var x = map(i, 0, num_x, 0, width);
      var y = map(j, 0, num_y, 0, height);
      
      fill(255, 100);
      ellipse(x, y, 50, 50);
    }
  }

}