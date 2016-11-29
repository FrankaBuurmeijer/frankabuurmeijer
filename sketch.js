function setup() {
  createCanvas(640,640);
  noLoop();
  background('black');
}

function draw() {
  stroke('lightblue');
  strokeWeight(2);
  drawLines(0,20,40);

  stroke('lightgreen')
  drawLines(5,20,40);

  stroke('magenta')
  drawLines(10,20,40);
}

function drawLines(offset,length,distance){
  this.off = offset;
  this.len = length;
  this.dis = distance;

for (var i=0;i<640/20;i++){
  aa = this.off;
  a = i*60 ;
  b = i*60 + 40 + this.off;
  c = i*60 + 20 + this.off;
  d = i*60 + 60 + this.off;

  horizontalLine(aa,a,this.len,this.dis);
  verticalLine(b,20,this.len,this.dis);
  diagonalRight(c,0,this.len,this.dis);
  diagonalLeft(b,40,this.len,this.dis);
  diagonalRight(b,40,this.len,this.dis);
  diagonalLeft(d,0,this.len,this.dis);
}

//these are the diagonal lines for the bottom-lft side of the screen
for (var i=0;i<640/20;i++){
  e = -i*60 + 40 + this.off;
  f = -i*60 + 20 + this.off;

  diagonalRight(f,0,this.len,this.dis);
  diagonalRight(e,100,this.len,this.dis);
}
}

function horizontalLine(xhorstart,yhor,length,distance){
  this.xhs = xhorstart;
  this.yh = yhor;
  this.le = length;
  this.di = distance;

for (var i = 0; i<(640/(this.le+this.di));i++) {
  this.xh = i*this.le+i*this.di+this.xhs;
  line(this.xh,this.yh,this.xh+this.le,this.yh);
}
}

function verticalLine(xver,yverstart,length,distance) {
  this.xv = xver;
  this.yvs = yverstart;
  this.le = length;
  this.di = distance;

for (var i = 0; i<(640/(this.le+this.di));i++) {
  this.yv = i*this.le+i*this.di+this.yvs;
  line(this.xv,this.yv,this.xv,this.yv+this.le);
  }
}

function diagonalRight(xdrightstart,ydrightstart,length,distance){
  this.xdrs = xdrightstart;
  this.ydrs = ydrightstart;
  this.le = length;
  this.di = distance;

for (var i = 0; i<(640/(this.le+this.di));i++) {
  this.xdr = i*this.le+i*this.di+this.xdrs;
  this.ydr = i*this.le+i*this.di+this.ydrs;
  line(this.xdr,this.ydr,this.xdr+this.le,this.ydr+this.le);
  }
}

function diagonalLeft(xdleftstart,ydleftstart,length,distance){
  this.xdls = xdleftstart;
  this.ydls = ydleftstart;
  this.le = length;
  this.di = distance;

for (var i = 0; i<(640/(this.le+this.di));i++) {
  this.xdl = this.xdls-(i*this.le+i*this.di);
  this.ydl = i*this.le+i*this.di+this.ydls;
  line(this.xdl,this.ydl,this.xdl-this.le,this.ydl+this.le);
  }
}

// length = 20
// distance = 60
