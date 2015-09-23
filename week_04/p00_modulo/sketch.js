// modulo is the operator %
// it gives you the remainder of a division
// e.g. 5 % 2 = 1
// e.g. 8 % 2 = 0
// e.g. 11 % 3 = 2
// e.g. 3 % 2 = 1
// e.g. 4 % 9 = 4
// e.g. 6 % 9 = 6

function setup() {
  var x = 8 % 2;
  
  
  var nx = 6;
  var ny = 4;
  
  // to get a row and column of a nx * ny grid, we can count
  // with modulo
  
  for (var i=0; i<nx*ny; i++) {

    // column can be figured with modulo
    var ix = i % nx;
    var iy = floor(i / nx); // floor rounds any decimal number *DOWN* to the nearest whole number
    
    println("i = "+i+ ", ix = "+ix+", iy = "+iy); 
  }
  
}