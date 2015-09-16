var t;
var t_increment;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  t = 0;  
  t_increment = 0;
}

function draw() {
  background(0);
  fill(255);
  
  // t_increment will control how "fast" we move
  // through the 1d noise graph
  t_increment = map(mouseX, 0, width, 0, 0.2);
  
  // noise will always output a value between 0 and 1
  // since noise gives us between 0 and 1, then
  // width * noise bounds between 0 and width
  
  var x = width * noise(t);
  var y = 400;
  
  // add t_increment to t
  t += t_increment;
  
  ellipse(x, y, 100, 100);
  
  text("t = "+t, 20, 30);
  text("t_increment = "+t_increment, 20, 60);
  text("noise(t) = "+noise(t), 20, 90);
  text("width * noise(t) = "+width * noise(t), 20, 120);
  
  // important notes:
  // noise(t) is fixed for every value of t, for the duration of the program
  // noise(t1) and noise(t2) are close to each other for close values of t1 and t2
}