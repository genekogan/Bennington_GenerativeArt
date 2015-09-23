var nx1 = [];
var nx2 = [];
var nx3 = [];
var nx4 = [];
var ny1 = [];
var ny2 = [];
var ny3 = [];
var ny4 = [];

var nx;
var ny;

var n; // number of bezier figures we have

function setup() {
  
  createCanvas(1200, 800);
  background(0);
  
  // let all the initial noise sampling
  // variables be different, so our samples
  // aren't all initially the same
  
  nx = 6;   // number of columns
  ny = 4;   // number of rows
  
  n = nx * ny;
  
  for (var i=0; i<n; i++) {
    nx1.push(random(100));
    nx2.push(random(100));
    nx3.push(random(100));
    nx4.push(random(100));
    ny1.push(random(100));
    ny2.push(random(100));
    ny3.push(random(100));
    ny4.push(random(100));
  }  
}

function draw() {
  
  for (var i=0; i<n; i++) {
    
    // we want a grid position from our counter variable
    // i.e. for nx = 5, and ny = 4   (5 columns, 4 rows)
    // we want this:
    // i=0, ix=0, iy=0
    // i=1, ix=1, iy=0
    // i=2, ix=2, iy=0
    // i=3, ix=3, iy=0
    // i=4, ix=4, iy=0
    // i=5, ix=0, iy=1
    // i=6, ix=1, iy=1
    // i=7, ix=2, iy=1
    // i=8, ix=3, iy=1
    // i=9, ix=4, iy=1
    // i=10, ix=0, iy=2
    // i=11, ix=1, iy=2
    // i=12, ix=2, iy=2
    // i=13, ix=3, iy=2
    // i=14, ix=4, iy=2

    // we need to conver the counter variable to a row and column index
    // see p00_modulo for this
    var ix = i % nx;        // column
    var iy = floor(i / nx); // row

    // for each position in the grid, get the left-right range of x-position ix
    var xleft = (width / nx) * ix;      
    var xright = (width / nx) * (ix+1);
    
    // for each position in the grid, get the top-down range of y-position iy
    var ytop = (height / ny) * iy;
    var ybottom = (height / ny) * (iy+1);
    
    var x1 = map(noise(nx1[i]), 0, 1, xleft, xright);
    var x2 = map(noise(nx2[i]), 0, 1, xleft, xright);
    var x3 = map(noise(nx3[i]), 0, 1, xleft, xright);
    var x4 = map(noise(nx4[i]), 0, 1, xleft, xright);
    var y1 = map(noise(ny1[i]), 0, 1, ytop, ybottom);
    var y2 = map(noise(ny2[i]), 0, 1, ytop, ybottom);
    var y3 = map(noise(ny3[i]), 0, 1, ytop, ybottom);
    var y4 = map(noise(ny4[i]), 0, 1, ytop, ybottom);
  
    noFill();
    stroke(255, 20);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    
    // change the noise samples
    nx1[i] += 0.0011;
    nx2[i] += 0.0022;
    nx3[i] += 0.0017;
    nx4[i] += 0.0021;
    ny1[i] += 0.0013;
    ny2[i] += 0.0019;
    ny3[i] += 0.0015;
    ny4[i] += 0.0014;
  }
}