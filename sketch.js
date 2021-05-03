let noiseOffset = 0.0;
let strokeWidth = 5;
let img;
let img2;
let img3;
let img4;
let recoil;
let cnv;
let mySound;
let i = 0;
let x = 0;

function preload(){
img4 = loadImage('assets/bh1.png');
img2 = loadImage('assets/white.png');
img3 = loadImage('assets/bh3.png');
img = loadImage('assets/td.png');
soundFormats('mp3','ogg');
mySound = loadSound('assets/gun');
recoil = 60;
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(154,130,64);
image(img,400,10,1000,1000);
flash1 = new flash(0);

}

function draw() {
  cnv.mouseClicked(mouseClicked);

}

function mouseClicked(){
//image(img2,mouseX-60,mouseY-50,150,150);
image(img3,mouseX -(recoil+(random(-5,5))),mouseY-(recoil+(random(-20,0))),random(100,140),random(100,140));
mySound.play();

  //opposite ->    //line(width -mouseX, height -mouseY,width -pmouseX,height-pmouseY);
  //background(220,50,133,5);
//strokeWeight(strokeWidth);
//noiseOffset = noiseOffset + 0.01;
//noiseOffset += 0.05;
//strokeWidth = noise(noiseOffset) * 100;
//stroke(map(mouseX, 0, 600, 0, 255,true))
//line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
//line(mouseX, mouseY, pmouseX, pmouseY);
}





function keyTyped(){

  if ( key === 's'){
    //save this image
    saveCanvas('fileName','png');
  } else if (key === 'c'){
//clear the images
clear();
background(154,130,64);
image(img,400,10,1000,1000);

  }

  return false


}
