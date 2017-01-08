var jupiter;
var yjup;

function setup() {
  jupiter = loadImage("jupiter-head-625X350.jpg");
  createCanvas(640,480, WEBGL);
  yjup = 0;
  direction = 1;
}

function draw() {
  background(0);
  push();
  translate(0,yjup);
  yjup = yjup + direction;
  texture(jupiter);
  sphere(100);
  pop();
  
  if (yjup == 140) {
    direction = -1;
  }
  if (yjup == -140) {
    direction = 1;
  }
  
  //saveCanvas('bouncingjupiter','jpg');
}