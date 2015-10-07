var nx, ny;
var points = [];
var permutation = [];

var lastPermutationPoint;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  nx = 4;
  ny = 4;
  
  for (var j=0; j<ny; j++) {
    for (var i=0; i<nx; i++) {
      var px = map(i, 0, nx-1, 100, width-100);
      var py = map(j, 0, ny-1, 100, height-100);
      var p = {x:px, y:py};
      points.push(p);
    }
  }
  
  createPermutation();
  lastPermutationPoint = 0;
}

function draw() {
  background(255);
  
  // draw all the labeled points
  for (var i=0; i<points.length; i++) {
    ellipse(points[i].x, points[i].y, 10, 10);
  }
  
  // after creating a permutation, let's draw lines connecting them
  for (i=0; i<lastPermutationPoint; i++) {
    var index1 = permutation[i];
    var index2 = permutation[i+1];
    line(points[index1].x, points[index1].y, points[index2].x, points[index2].y);
  }
  
  // every 60 frames, increment lastPermutationPoint
  if (frameCount % 60 === 0) {
    lastPermutationPoint += 1; 
    // make sure to constrain lastPermutationPoint to the length of permutations
    lastPermutationPoint = constrain(lastPermutationPoint, 0, permutation.length-1);  
  }
}



// we need an algorithm to create a permutation of the points
// to do this, we will create two arrays. the first one has all the ordered
// indexes. the second is empty.
// then we sample a point from the ordered array and move it from the ordered array into the permutation array.
// repeat this until no points remain in the ordered array
// then the permutation will be done
// EXAMPLE WITH 5 ELEMENTS
/*
[1, 2, 3, 4, 5]
[]

pick 3
[1, 2, 4, 5]
[3]

pick 1
[2, 4, 5]
[3, 1]

pick 5
[2, 4]
[3, 1, 5]

pick 4
[2]
[3, 1, 5, 4]

pick 2
[]
[3, 1, 5, 4, 2]
*/

function createPermutation() {
  permutation = []; // clear previous permutation
  
  // create ordered array with all our indexes in order
  var all = [];
  for (var i=0; i<nx*ny; i++){
    all.push(i);
  }
  
  // procedure which removes a random value from
  // all and places it into permutation until no
  // elements are left in all.
  
  for (var i=0; i<nx*ny; i++) {
    // sample random value from all
    var indexRandom = floor(random(all.length));
    
    // place the sample into permutation
    permutation.push(all[indexRandom]);
    
    // remove the sampled point from all
    all.splice(indexRandom, 1);
  }
}








