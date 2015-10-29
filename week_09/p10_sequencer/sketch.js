var kick;
var snare;
var hat;

var numColumns = 8;
var column;
var matrix = [[], [], []];

function setup() {
  createCanvas(1024, 800);
  
  column = 0;
  
  kick = loadSound('kick23.wav')
  snare = loadSound('snare1.wav')
  hat = loadSound('hat3.wav')
  
  for (var b=0; b<8; b++) {
    matrix[0].push(0);
    matrix[1].push(0);
    matrix[2].push(0);
  }
}

function draw() {
  background(255);
  textSize(100);
  
  for (var row=0; row < 3; row++) {
    for (var col=0; col < numColumns; col++) {
      var x = map(col, 0, numColumns, 0, width);
      var y = map(row, 0, 3, 0, height);
      var w = width / numColumns;
      var h = height / 3;
      if (matrix[row][col] == 1) {
        fill(255, 0, 0);
      }
      else {
        noFill();
      }
      rect(x, y, w, h);
    }
  }
  
  
  var t = floor(millis() / 100) % numColumns;
  stroke(0, 150, 0);
  strokeWeight(8);
  noFill();
  rect(map(t, 0, numColumns, 0, width), 0, width / numColumns, height);
  strokeWeight(1);
  
  // are we in a new column?
  if (t !== column) {
    column = t;
    playColumn(column);
  }
}

function playColumn(column) {
  if (matrix[0][column] == 1) {
    kick.play();
  }
  if (matrix[1][column] == 1) {
    snare.play();
    println("play");
  }
  if (matrix[2][column] == 1) {
    hat.play();
  }
  
}

function mousePressed() {
  var x = floor(mouseX / (width / numColumns));
  var y = floor(mouseY / (height / 3));
  matrix[y][x] = 1 - matrix[y][x];
}

function randomizeMatrix() {
  for (var row=0; row < 3; row++) {
    for (var col=0; col < numColumns; col++) {
      if (random(1) < 0.5) {
        matrix[row][column] = 1;
      }
      else {
        matrix[row][column] = 0;
      }
    }
  }
}

function keyPressed() {
  if (key=='1') {
    kick.play();
  }
  if (key=='2') {
    snare.play();
  }
  if (key=='3') {
    hat.play();
  }
  if (key == ' ') {
    println("rand");
    randomizeMatrix();
  }
}