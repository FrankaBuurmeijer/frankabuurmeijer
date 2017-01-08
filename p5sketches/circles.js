function setup() {
  createCanvas(640,640);
  //noLoop();
  background(0);
}

function draw() {
  drawGreyCircles();
  drawColorfulCircles();
  //saveCanvas('circles','jpg');
}

function drawGreyCircles() {
  color1=random(255);
  xpos1=random(640);
  ypos1=random(640);
  dia1=random(20);
  noStroke();
  fill(color(color1));
  ellipse(xpos1,ypos1,dia1,dia1);
}

function drawColorfulCircles(){
  color2 = random(['blue', 'green', 'red', 'magenta', 'yellow']);
  xpos2 = random(640);
  ypos2 = random(640);
  dia2 = random(20);
  noStroke();
  fill(color(color2));
  ellipse(xpos2,ypos2,dia2,dia2);
}