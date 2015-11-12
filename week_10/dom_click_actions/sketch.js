var myText;

function setup() {
  noCanvas();
  
  myText = createP("this is my text!!!");
  myText.id("myElement"); // this will bind all of the css associated with id "myElement" to this <p>
  myText.mousePressed(myMousePressedAction);
}

function myMousePressedAction() {
  alert("you clicked me!!!!");
  myText.style("background-color", color(random(255),random(255),random(255)));
  myText.position(random(500), random(500));
}

function draw() {
  
}

function mousePressed() {
  
}

