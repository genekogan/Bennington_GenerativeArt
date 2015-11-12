var myTextBox;
var myDropdown;
var myButton;

function setup() {
  noCanvas();
  
  
  myTextBox = createInput("what's your name?");
  
  myDropdown = createSelect("what would you like?");
  myDropdown.option("compliment me");
  myDropdown.option("insult me");
  myDropdown.option("surprise me");
  
  myButton = createButton("go!");
  myButton.mousePressed(buttonPressed);
}

function buttonPressed() {
  if (myDropdown.selected() == "compliment me") {
    compliment();
  }
  else if (myDropdown.selected() == "insult me") {
    insult();
  }
  else if (myDropdown.selected() == "surprise me") {
    if (random(1) < 0.5) {
      compliment();
    }
    else {
      insult();
    }
  }
}

function compliment() {
  var msg = myTextBox.value();
  var t = floor(random(3));
  if (t == 0){
    msg += " is awesome!";
  }
  else if (t == 1) {
    msg += " is the coolest";
  }
  else if (t == 2) {
    msg += " is sweet!";
  }
  createDiv(msg);
}

function insult() {
  var msg = myTextBox.value();
  var t = floor(random(3));
  if (t == 0){
    msg += " is stinky!";
  }
  else if (t == 1) {
    msg += " is mean";
  }
  else if (t == 2) {
    msg += " is not nice.";
  }
  createDiv(msg);
}


