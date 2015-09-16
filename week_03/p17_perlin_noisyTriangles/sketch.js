var nx1;
var nx2;
var nx3;
var ny1;
var ny2;
var ny3;

function setup() {
  createCanvas(800, 800);
 
  // let all the initial noise sampling
  // variables be different, so our samples
  // aren't all initially the same
  nx1 = 10;
  nx2 = 20;
  nx3 = 30;
  ny1 = 40;
  ny2 = 50;
  ny3 = 60;
}

function draw() {
  
  var x1 = width * noise(nx1);
  var x2 = width * noise(nx2);
  var x3 = width * noise(nx3);
  var y1 = height * noise(ny1);
  var y2 = height * noise(ny2);
  var y3 = height * noise(ny3);
  
  background(0);
  fill(255);
  triangle(x1, y1, x2, y2, x3, y3);
  
  // change the noise samples
  nx1 += 0.0011;
  nx2 += 0.0022;
  nx3 += 0.0017;
  ny1 += 0.0013;
  ny2 += 0.0019;
  ny3 += 0.0015;
  
}