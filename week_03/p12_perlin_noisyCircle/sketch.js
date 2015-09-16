var t;
var t_increment;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  t = 0;  
  t_increment = 0;
  
  background(0);
}

function draw() {
  
  fill(255, 10);
  
  // t_increment will control how "fast" we move
  // through the 1d noise graph
  t_increment = map(mouseX, 0, width, 0, 0.2);
  
  // noise will always output a value between 0 and 1
  // since noise gives us between 0 and 1, then
  // width * noise bounds between 0 and width
  
  var x = width * noise(t);
  
  // this example is the same as p09, but we are making one change:
  // let y *also* vary according to noise.
  // notice that if both x and y depend on noise(t), then the circle will
  // only move along a diagonal between (0, 0) and (width, height). this
  // is because noise(t) is fixed, so x and y will be proportional.  but if we
  // offset one of them by an arbitrary large amount, e.g. 8, then they will be
  // sampling from different regions along the noise field
  var y = height * noise(t+8);
  
  // add t_increment to t
  t += t_increment;
  
  
  ellipse(x, y, 100, 100);
}