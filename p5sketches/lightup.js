var x = []; // global variable, should be available to all functions
var y = []; // global variable, should be available to all functions
var col =0;

function setup() {
  createCanvas(640,640);
  background(0);
  frameRate(30);
  // draws the background of lights once, return x and y to use later
  calculateCoordinates();
  drawEllipse();
}

function draw() {
  calculateColor();
  drawLight();
  drawCounter();
  //saveCanvas('lightup','jpg');
}

var calculateCoordinates = function(){
  for (var a = 0; a< 640/50; a++){
    x.push(a*50);
    for (var b = 0; b<640/50; b++){
      y.push(b*50);
      }
  }
}

var drawEllipse = function() {
  for (var a = 0; a< 640/50; a++){
    for (var b = 0; b<640/50; b++){
        fill(color(random(25)));
        ellipse(x[a],y[b],50,50);
    }
  }
}

var calculateColor = function(){
  for (var a = 1; a<640/50; a++){
    for (var b = 1; b<640/50; b++){
      if (mouseX >= (x[a]-10) && mouseX <= (x[a]+10) && mouseY >= (y[b]-10) && mouseY <=(y[b]+10)) {
          col = col + 1; //change of 1, frames per second
      }
      // this works!! now do this for every area in between!! So the y direction! I don't know why it works yet.
      else if (mouseX > (x[a-1]+10) && mouseX < (x[a]-10)){
        col = 0;
      }
      else if (mouseY > (y[b-1]+10) && mouseY < (y[b]-10)){
        col = 0;
      }
    }
  }  
}

var drawLight = function() {
  for (var a = 0; a<640/50; a++){
    for (var b = 0; b<640/50; b++){
      if (mouseX >= (x[a]-10) && mouseX <= (x[a]+10) && mouseY >= (y[b]-10) && mouseY <=(y[b]+10)) {
//          for (c=0;c<2500;c++){
//            col = col + c*0.1; //change of 1, frames per second
//            col= frameCount;
            fill(color(col));
            ellipse(x[a],y[b],50,50);
 //         }
      }
      //else {
      //  frameCount = 0;
      //}
    }
  }
}

var drawCounter = function(){
  fill(color("white"));
  textSize(48);
  text(String(col),50,50);
}