var t;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  t = 0;  
}

function draw() {
  background(0);
  fill(255);
  
  // noise will always output a value between 0 and 1
  // since noise gives us between 0 and 1, then
  // width * noise bounds between 0 and width
  
  var x = width * noise(t);
  var y = 400;
  
  t += 0.001;
  
  ellipse(x, y, 100, 100);
  
  text("t = "+t, 20, 30);
  text("noise(t) = "+noise(t), 20, 60);
  text("width * noise(t) = "+width * noise(t), 20, 90);
  
  // important notes:
  // noise(t) is fixed for every value of t, for the duration of the program
  // noise(t1) and noise(t2) are close to each other for close values of t1 and t2
}