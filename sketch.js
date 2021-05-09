'use strict';

let state = 'title';
let cnv;

function setup(){
cnv = createCanvas(600,600);

}

function draw(){
  if (state === 'title'){
    title();
    cnv.mouseClicked(titleMouseClicked);
}  else if (state === 'level1') {
level1();
cnv.mouseClicked(level1MouseClicked);
}
}

function title(){
  background(100);
  textSize(80);
  stroke(25);
  text('MY Game',100,100);

textSize(30);
  text('click anywhere to start',100,300);
}

function titleMouseClicked(){
console.log('canvas is clicked')
  state = 'level1'
}

function level1(){
background(50,150,200);
}


function level1MouseClicked(){
console.log('canvas is clicked on level 1')


}
