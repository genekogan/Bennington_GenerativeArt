var s1;
var s2;
var s3;
var s4;

function setup() {
  createCanvas(1024, 800);
  
  s1 = new p5.Oscillator();
  s1.setType('sine');
  s1.start();

  s2 = new p5.Oscillator();
  s2.setType('sine');
  s2.start();

  s3 = new p5.Oscillator();
  s3.setType('sine');
  s3.start();

  s4 = new p5.Oscillator();
  s4.setType('sine');
  s4.start();

}

function draw() {
  var f = mouseX;
  
  // experiment with different frequencies which are sympathetic to each other
  s1.freq(f);
  s2.freq(f*13/10);
  s3.freq(f*3/2);
  s4.freq(f*15/8);
  
  // you can also pan
  s1.pan(-1);
  s3.pan(-1);
  s2.pan(1);
  s4.pan(1);

  background(255);
  textSize(100);
  text(f, 100, 100);
}