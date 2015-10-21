var mic;
var del1, del2, del3;


function setup() {
  createCanvas(800, 800);
  
  mic = new p5.AudioIn();
  mic.start();  
  
  del1 = new p5.Delay();
  del2 = new p5.Delay();
  del3 = new p5.Delay();
  
}

function draw() {
  background(0);
  
  // arguments for delay
  // 1) input source (snd)
  // 2) delay time (0.12 seconds)
  // 3) feedback (e.g. add delayed signal back to 0.7*original)
  // 4) frequency for internal filter
  
  del1.process(mic, 0.12, 0.3, 2300);
  del2.process(del1, 0.073, 0.7, 800);
  del3.process(del2, 0.095, 0.5, 9000);
  
}