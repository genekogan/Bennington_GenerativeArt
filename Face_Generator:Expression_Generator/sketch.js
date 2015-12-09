/*function preload(){
  snd = loadSound('Scorpion.mp3');
}*/

function setup() {
  createCanvas(800, 800);
  //frameRate(2);
  //amp =  new p5.Amplitude();
  noLoop();
}


function draw(){
  
  background(255);
  
  noStroke();
  
  // hair
  fill(0);
  ellipse(370, 270, random(230, 270), random(200, 300));

  // face
  noStroke();
  fill(random(100, 255), random(100, 255), random(100, 255));
  rect(250, 200, 250, 300, random(50, 250));

  // ears
  var earx = random(100, 250);
  var eary = random(100, 250);
  arc(290, 340, earx, eary, 2, 4);
  arc(470, 340, earx, eary, -1, 1);
  
  
  // eye
  push();
  
  var leftEyeOuterPlacement = random(320, 350);
  var rightEyeOuterPlacement = leftEyeOuterPlacement + 100;
  var leftEyeInnerPlacement = random(330, 340);
  var rightEyeInnerPlacement = leftEyeInnerPlacement + 100;
  
  fill(255);
  ellipse(leftEyeOuterPlacement, 350, 40, 40);
  ellipse(rightEyeOuterPlacement, 350, 40, 40);
  fill(0);
  ellipse(leftEyeInnerPlacement, 350, 20, 20);
  ellipse(rightEyeInnerPlacement, 350, 20, 20);
  
  pop();
  
  // eyebrow
  eby1 = random(280, 300);
  eby2 = random(280, 300);
  eby3 = random(290, 310);
  eby4 = random(330, 350);
  noFill();
  stroke(random(255), random(100), 0);
  strokeWeight(20);
  curve(310, eby1, 310, eby2, 350, eby3, 300, eby4);
  curve(420, eby1, 420, eby2, 460, eby3, 460, eby4);
  
  // mouth
  strokeWeight(10);
  arc(380, 420, 100, 50, random(0, 1), random(1.5, 3.14), CHORD);
  
  // nose
  arc(380, 380, 50, 60, random(1, 1.5), random(1.7, 2), PIE);
  
}

function keyPressed(){
  if (key == ' '){
    redraw();
  }
}

/*function ampReact(){
  if(level > 0.01){
    redraw();
  }
}*/

/*function face(){
  
}

function nose(){
  
}

function eyes(){
  
}

function ears(){
  
}

function hairstyle(){
  
}

function mouth(){
  
}

function back(){
  
}*/

// build a face
// build a nose
// build eyes
// build ears
// build a mouth
// build back
// build hairstyle