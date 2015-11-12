var myText;

var mySlider;
var myButton;

function setup() {
  noCanvas();
  
  myText = createP("this is my text!!!");
  myText.position(0, 60);
  myText.id("myElement"); // this will bind all of the css associated with id "myElement" to this <p>
  
  mySlider = createSlider(0, 500, 50); // name, min, max, value
  myButton = createButton("change color!");
  
  myButton.mousePressed(myButtonPressed);
  
  mySlider.position(20, 30);
  myButton.position(220, 30);
  

}

function myButtonPressed() {
  myText.style("background-color", color(random(255), random(255), random(255)));
}

function draw() {
  myText.html("the value of the slider is "+mySlider.value());
}

function mousePressed() {
  
}

