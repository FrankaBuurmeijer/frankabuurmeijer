function setup() {
  mercury = loadImage("mercury.jpg");
  venus = loadImage("venus.jpg");
  earth = loadImage("earth.jpg");
  mars = loadImage("mars.jpg");
  jupiter = loadImage("jupiter.jpg");
  saturn = loadImage("saturn.jpg");
  uranus = loadImage("uranus.jpg");
  neptune = loadImage("neptune.jpg");
  createCanvas(2048,480, WEBGL);
  background(0);
  //noLoop();
}

function draw() {
  background(0);
  // maximum distance 4495100000 = translation 1024
  // minimum distance 0 = translation -1024
  // midpoint 4495100000/2 = 22475500000 = (0,0)

  function calculateTranslation(distance) {
    if (distance < 2247550000) {
      translation = (-1024 * (2247550000 - distance)) / 2247550000;
    }
    else {
      translation = 1024 * ((distance - 2247550000) / 2247550000);
    }
  return translation
  }

/*
// zon 696342 km
var zonr = 696342;
var zond = 0;
  push();
  translate(calculateTranslation(zond),0);
  sphere(zonr/100000);
//  sphere((zonr*1024)/2247550000);
  pop();
*/

// mercurius 2440
var merr = 2440;
var merd = 57900000;
  push();
  translate(calculateTranslation(merd),0);
  texture(mercury);
  sphere(merr/1000);
  pop();
  
// venus 6052 
var venr = 6052;
var vend = 108200000;
  push();
  translate(calculateTranslation(vend),0);
  texture(venus);
  sphere(venr/1000);
  pop();
  
// aarde 6371
var aarr = 6371;
var aard = 149600000;
  push();
  translate(calculateTranslation(aard),0);
  texture(earth);
  sphere(aarr/1000);
  pop();
  
// mars 3390
var marr = 3390;
var mard = 227900000;
  push();
  translate(calculateTranslation(mard),0);
  texture(mars);
  sphere(marr/1000);
  pop();
  
// jupiter 69911
var jupr = 69911;
var jupd = 778600000;
  push();
  translate(calculateTranslation(jupd),0);
  texture(jupiter);
  sphere(jupr/1000);
  pop();
  
// saturnus 58232
var satr = 58232;
var satd = 1433500000;
  push();
  translate(calculateTranslation(satd),0);
  texture(saturn);
  sphere(satr/1000);
  rotateX(radians(80));
  torus(120,1);
  pop();
  
// uranus 25362
var urar = 25362;
var urad = 2872500000;
  push();
  translate(calculateTranslation(urad),0);
  texture(uranus);
  sphere(urar/1000);
  pop();
  
// neptunus 24662
var nepr = 24662;
var nepd = 4495100000;
  push();
  translate(calculateTranslation(nepd),0);
  texture(neptune);
  sphere(nepr/1000);
  pop();
  
  //saveCanvas('planets','jpeg');
}
