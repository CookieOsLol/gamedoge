'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let tokens = [];
let enemies = [];

let playerImg;
let tokenImg;
let enemyImg;
let titleImg;
let playImg;

function preload(){
titleImg = loadImage('assets/title.png');
playerImg = loadImage('assets/doge.png');
tokenImg = loadImage('assets/token.png');
enemyImg = loadImage('assets/enemy.png');
playImg = loadImage('assets/play.png');

}

function setup(){
cnv = createCanvas(w,h);
frameRate(60);

imageMode(CENTER);

rectMode(CENTER);

textFont('monospace');

player = new Player();
tokens.push(new Token());
enemies.push(new Enemy());


}

function draw(){

switch (state){
  case 'title':
  title();
  cnv.mouseClicked(titleMouseClicked);
  break;

  case 'level 1':
  level1();
  cnv.mouseClicked(level1MouseClicked);
  break;

  case 'level 2':
  level2();
  cnv.mouseClicked(level2MouseClicked);
  break;

  case 'level 3':
  level3();
  cnv.mouseClicked(level3MouseClicked);
  break;

case 'you win':
youWin();
cnv.mouseClicked(youWinMouseClicked);
  break;
default:
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

function keyPressed(){

if (keyCode == LEFT_ARROW){
player.direction = 'left'
} else if (keyCode == RIGHT_ARROW) {
player.direction = 'right'

} else if (keyCode == UP_ARROW){
  player.direction = 'up'
} else if (keyCode == DOWN_ARROW) {
  player.direction = 'down'
} else if (key = ' ') {
  player.direction = 'still';
}


}

function keyReleased(){

let numberKeysPressed = 0;

if (keyIsDown(LEFT_ARROW)){
  numberKeysPressed++;
}
if (keyIsDown(RIGHT_ARROW)){
  numberKeysPressed++;
}if (keyIsDown(DOWN_ARROW)){
  numberKeysPressed++;
}if (keyIsDown(UP_ARROW)){
  numberKeysPressed++;
}



if (numberKeysPressed == 0){
  player.direction = 'still';
}

}


function title(){
  image(titleImg,300,300,600,600);
//  textAlign(CENTER);
  //text('MY Game',w/2,h/5);
  image(playImg,300,470,300,300);

//textSize(30);
  //text('click anywhere to start',w/2,h/2);
}

function titleMouseClicked(){
console.log('canvas is clicked')
  state = 'level 1'
}

function level1(){
background(50,150,200);
//text('click for points',w/2,h - 50);

if (random(1) <= 0.04){
tokens.push(new Token());
}

if (random(1) <= 0.06){
enemies.push(new Enemy());

}



player.display();
player.move();

for (let i = 0; i < enemies.length; i++){
  enemies[i].display();
  enemies[i].move();
}

for (let i = 0; i < tokens.length; i++){
  tokens[i].display();
  tokens[i].move();

}

//check for collision, if there is a collision increase points by 1

for (let i = tokens.length - 1; i >= 0; i-- ){

if (dist(player.x,player.y,tokens[i].x,tokens[i].y)<= (player.r + tokens[i].r)/2){
points++;

console.log(points);
tokens.splice(i,1);

} else if (tokens[i].y > h){
  tokens.splice(i,1);

}
}



for (let i = enemies.length - 1; i >= 0; i-- ){

if (dist(player.x,player.y,enemies[i].x,enemies[i].y) <= (player.r + enemies[i].r)/2){
points--;

enemies.splice(i,1);

} else if (enemies[i].y > h){
  enemies.splice(i,1);

}

}
text(`points : ${points}`, w/4, h-30);


}

function level1MouseClicked(){
//points ++ ;
//console.log('points = ' + points);

//if (points >= 10){
  //state = 'you win';
//}

}



function youWin(){
background(100);
textSize(80);
stroke(255);
text('You win!',w/2,h/2);

textSize(30);
text('click anywhere to restart',w/2,h * 3/4)


}


function youWinMouseClicked(){
state = 'level 1';
points = 0;

}
