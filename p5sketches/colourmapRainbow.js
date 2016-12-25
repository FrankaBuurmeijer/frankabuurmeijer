function setup() {
  width = 640;
  height = 640;
  createCanvas(width, height);
  background(0);
}

function draw() {
  var c = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  x = mouseX;
  y = mouseY;
  w = width/c.length;
  
  if( x >= 0*w && x < 1*w){
    r = 96 - x*(96/w);
    g = 27 + x*(13/w);
    b = 108 + x*(141/w);
    col = color(r,g,b);
  }
  else if ( x >= 1*w && x < 2*w) {
    r = 0 + (x-w)*(44/w);
    g = 40 + (x-w)*(64/w);
    b = 249 - (x-w)*(242/w);
    col = color(r,g,b);
  }
    else if ( x >= 2*w && x < 3*w) {
    r = 44 + (x-2*w)*(211/w);
    g = 104 + (x-2*w)*(146/w);
    b = 7 + (x-2*w)*(35/w);
    col = color(r,g,b);
  }
    else if ( x >= 3*w && x < 4*w) {
    r = 255 - (x-3*w)*(14/w);
    g = 250 - (x-3*w)*(98/w);
    b = 42 - (x-3*w)*(3/w);
    col = color(r,g,b);
  }
    else if ( x >= 4*w && x < 5*w) {
    r = 241 - (x-4*w)*(11/w);
    g = 152 - (x-4*w)*(106/w);
    b = 39 - (x-4*w)*(2/w);
    col = color(r,g,b);
  }
  
if(mouseIsPressed){
  noStroke();
  fill(col);
  ellipse(mouseX,mouseY,5,5)
}

}

// purple r = 96, g = 27, b = 108
// verschil r = -96, g = +13, b = +141 
// blue r = 0, g =40, b = 249
// verschil r = +44, g = +64, b = -242
// green r = 44, g = 104, b = 7
// verschil r = +211, g = +146, b = +35
// yellow r = 255, g = 250, b = 42
// verschil r = -14, g = -98, b = -3
// orange r = 241, g = 152, b = 39
// verschil r = -11, g = -106, b = -2
// red r = 230, g = 46, b = 37