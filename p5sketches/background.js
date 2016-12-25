var x;

function setup() {
  createCanvas(640,640);
  background(0);
//  noLoop();
}

function draw() {
  noFill();
//  line(x,0,x,640);
  stroke(selectColor());
  strokeWeight(random(10));;
  arc(mouseX, 640/2, 40, 640,PI+HALF_PI, HALF_PI,OPEN);
  //filter(BLUR,2);
}

/*
function mouseClicked() {
  x = mouseX;
  stroke(selectColor());
  strokeWeight(random(10));
}
*/

function mouseClicked() {
  noLoop();
  filter(BLUR,2);
}

function selectColor() {
var turquoise = [46,126,151];
var lightPurple = [174,106,151];
var lightGreen = [144,176,124];
var pink = [218,47,89];
var purple = [105,30,117];
var blue1 = [45,94,154];
var salmon = [190,60,62];
var redPurple = [83,18,34];
var green1 = [91,127,59];
var darkBlue = [17,48,103];
var darkGreen = [51,48,50];
return random([turquoise,lightPurple, lightGreen,pink,purple, blue1,salmon,redPurple,green1,darkBlue,darkGreen]);
}