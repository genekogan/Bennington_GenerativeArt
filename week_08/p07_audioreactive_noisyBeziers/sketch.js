var mic;
var level;
var isAboveThresh;

var nx1;
var nx2;
var nx3;
var nx4;
var ny1;
var ny2;
var ny3;
var ny4;

var bezierColor;

function setup() {
  createCanvas(1650, 1080);
  background(0);
  textSize(24);
  
  mic = new p5.AudioIn();
  mic.start();
  
  bgcolor = color(0);
  
  isAboveThresh = false;
  
  // let all the initial noise sampling
  // variables be different, so our samples
  // aren't all initially the same
  nx1 = 10;
  nx2 = 20;
  nx3 = 30;
  nx4 = 40;
  ny1 = 50;
  ny2 = 60;
  ny3 = 70;
  ny4 = 80;
  
  bezierColor = color(255);
}

function draw() {
  
  // current amplitude of the microphone
  level = mic.getLevel();
  
  var threshold = 0.1;
  
  // check to see if we have just gone above the threshold
  if (level > threshold && !isAboveThresh) {
    isAboveThresh = true;
    changeEverything();
  }
  else if (level < threshold && isAboveThresh) {
    isAboveThresh = false;
  }



  var x1 = width * noise(nx1);
  var x2 = width * noise(nx2);
  var x3 = width * noise(nx3);
  var x4 = width * noise(nx4);
  var y1 = height * noise(ny1);
  var y2 = height * noise(ny2);
  var y3 = height * noise(ny3);
  var y4 = height * noise(ny4);
  
  noFill();
  stroke(red(bezierColor), green(bezierColor), blue(bezierColor), 20);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  
  // change the noise samples
  nx1 += 0.0011;
  nx2 += 0.0022;
  nx3 += 0.0017;
  nx4 += 0.0021;
  ny1 += 0.0013;
  ny2 += 0.0019;
  ny3 += 0.0015;
  ny4 += 0.0014;
}

function changeEverything() {
  nx1 += random(100);
  nx2 += random(100);
  nx3 += random(100);
  nx4 += random(100);
  ny1 += random(100);
  ny2 += random(100);
  ny3 += random(100);
  ny4 += random(100);
  
  bezierColor = color(random(255), random(255), random(255));
}