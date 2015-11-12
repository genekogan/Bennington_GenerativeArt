var myText;

function setup() {
  noCanvas();
  
  myText = createP("this is my text!!!");
  
  myText.style("background-color", color(255, 255, 0));
  myText.style("font-size", "72px");
  myText.style("font-family", "Papyrus");
  myText.style("padding", "120px");
  myText.style("margin", "50px");
  
}

function draw() {
  if (frameCount % 10 == 0) {
    myText.style("background-color", color(random(255),random(255),random(255)));
  }
}

function mousePressed() {
  myText.style("padding", floor(random(200))+"px");
}

