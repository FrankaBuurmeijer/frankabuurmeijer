function setup() {
  var width = 640;
  var height = 640;
  createCanvas(width,height);
  background(255);
  noLoop();
}

function draw() {
var c = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
var w = width/c.length;

for (var i=0;i<6;i++){
  strokeWeight(1);
  stroke(c[i]);
  line(i*w,0,i*w,640);
}

// probleem zit waarschijnlijk in de volgorde van de code. Voor elke x bepaald het programma nu rgb meerdere keren in de a loop. Uit de a loop volgt altijd de laatste blauwe kluer die dus ook elke x in de range krijgt.
for (var x = 0; x < width; x++){
  if (x >= 0 && x < 1*w) {
    for (var x = 0; x<1*w;x++) {
      r = 96 - x*(96/w);
      g = 27 + x*(13/w);
      b = 108 + x*(141/w);
      var col = color(r,g,b);
      stroke(col);
      line(x,0,x,640);
    }
  }
  else if (x >= 1*w && x < 2*w) {
    for (var x = 1*w; x<2*w;x++) {
      r = 0 + (x-w)*(44/w);
      g = 40 + (x-w)*(64/w);
      b = 249 - (x-w)*(242/w);
      var col = color(r,g,b);
      stroke(col);
      line(x,0,x,640);
    }
  }
  else if (x >= 2*w && x < 3*w) {
    for (var x = 2*w; x<3*w;x++) {
      r = 44 + (x-2*w)*(211/w);
      g = 104 + (x-2*w)*(146/w);
      b = 7 + (x-2*w)*(35/w);
      var col = color(r,g,b);
      stroke(col);
      line(x,0,x,640);
    }
  }
  else if (x >= 3*w && x < 4*w) {
    for (var x = 3*w; x<4*w;x++) {
      r = 255 - (x-3*w)*(14/w);
      g = 250 - (x-3*w)*(98/w);
      b = 42 - (x-3*w)*(3/w);
      var col = color(r,g,b);
      stroke(col);
      line(x,0,x,640);
    }
  }
  else if (x >= 4*w && x < 5*w) {
    for (var x = 4*w; x<5*w;x++) {
      r = 241 - (x-4*w)*(11/w);
      g = 152 - (x-4*w)*(106/w);
      b = 39 - (x-4*w)*(2/w);
      var col = color(r,g,b);
      stroke(col);
      line(x,0,x,640);
    }
  }
}
//  saveCanvas('rainbow', 'jpg');
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
