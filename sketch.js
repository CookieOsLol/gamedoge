'use strict';

let state = 'title';
let cnv;
let points = 0;


function setup(){
cnv = createCanvas(600,600);

}

function draw(){

switch (state){
  case'title':
  title();
  cnv.mouseClicked(titleMouseClicked);
  break;

  case 'level1':
  level1();
  cnv.mouseClicked(level1MouseClicked);
  break;

case 'you win' :
youWin();
cnv.mouseClicked(youWinMouseClicked);
break;


  default;
  break;
}

  //if (state === 'title'){
    //title();
    //cnv.mouseClicked(titleMouseClicked);
//}  else if (state === 'level1') {
//level1();
//cnv.mouseClicked(level1MouseClicked);
//} else {
//}
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
  state = 'level 1'
}

function level1(){
background(50,150,200);
text('click for points',0,height -30);
}


function level1MouseClicked(){
points ++ ;
console.log('points = ' + points);

if (points >= 10){
  state = 'you win';
}

}



function youWin(){
background(100);
textSize(80);
stroke(255);
text('You win!',100,100);

textSize(30);
text('click anywhere to restart',100,300)


}


function youWinMouseClicked(){
state = 'level 1';
points = 0;


}
