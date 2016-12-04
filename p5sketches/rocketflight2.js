var x;
var y;

function setup() {
  createCanvas(640,640);
  background(0);
}

function draw() {
  y--;
  tekenraket(x,y,x+10,y+20,x-10,y+20, x+15,y+30,x-15,y+30, x+15,y+110,x-15,y+110, x+15,y+150,x+5,y+110, x-5,y+110,x-15,y+150);
  //saveFrames("rocketflight2","jpg",300,1);
  
}


function mouseClicked(){
  x = mouseX;
  y = mouseY;
}


var tekenraket = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){
  col = ['purple', 'pink', 'magenta', 'yellow','lightgreen', 'lightblue'];
  fill(color(random(col)));
  beginShape();
  vertex(a,b);
  vertex(c,d);
  vertex(e,f);
  endShape();
  fill(color(random(col)));
  beginShape();
  vertex(c,d);
  vertex(g,h);
  vertex(i,j);
  vertex(e,f);
  endShape();
  fill(color(random(col)));
  beginShape();
  vertex(g,h);
  vertex(k,l);
  vertex(m,n);
  vertex(i,j);
  endShape();
  fill(color(random(col)));
  beginShape();
  vertex(k,l);
  vertex(o,p);
  vertex(q,r);
  endShape();
  beginShape();
  vertex(m,n);
  vertex(s,t);
  vertex(u,v);
  endShape();
}