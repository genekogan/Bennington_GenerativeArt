
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  var x = sin(0.01 * frameCount);
  
  // the variable x exists in the range between -1 and 1
  // we can map the variable x from the range of {-1, 1} to some other range
  
  // e.g., we will make the variable "opacity" be the value of x remapped from
  // {-1,1} to {0,255}
  // arguments for map: input, input min, input max, output min, output max
  var opacity = map(x, -1, 1, 0, 255);  

  fill(255, opacity);
  ellipse(400, 400, 400, 400);
  
  fill(255);
  textSize(24);
  text("x = "+x, 20, 50);
  text("opacity = "+opacity, 20, 80);

}