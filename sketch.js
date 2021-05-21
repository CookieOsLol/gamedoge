'use strict';

let state = 'title';
let cnv;
let points = 1;
let lives  = 3;
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
let bgImg;

//let playerSS;
//let enemySS;
//let playerJSON;
//let enemyJSON;

//let playerAnimation = [];
//let enemyAnimation = [];


function preload(){
titleImg = loadImage('assets/Title.png');
playerImg = loadImage('assets/doge.png');
tokenImg = loadImage('assets/token.png');
enemyImg = loadImage('assets/enemy.png');
playImg = loadImage('assets/Play.png');
bgImg = loadImage('assets/background.png');

//playerSS = loadImage('assets/dogeSS.png');
//playerJSON = loadJSON('assets/dogeSS.json');

//enemySS = loadImage('assets/EnemySS.png');
//enemyJSON = loadJSON('assets/EnemySS.json');
}

function setup(){
cnv = createCanvas(w,h);
frameRate(60);

imageMode(CENTER);

rectMode(CENTER);

textFont('monospace');

//let playerFrames = playerJSON.frames;

//for (let i = 0; i < playerFrames.length; i++){
//let pos = playerFrames[i].frame;
//let img = playerSS.get(pos.x,pos.y,pos.w,pos.h);
//  playerAnimation.push(img);
//  console.log(playerAnimation);
//}



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

  case 'gameover':
  gameover();
  cnv.mouseClicked(gameoverMouseClicked);
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

if (random(1) <= 0.001){
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

if (dist(player.x,player.y,tokens[i].x,tokens[i].y)<= (player.r + tokens[i].r)/4){
points++;

console.log(points);
tokens.splice(i,1);

} else if (tokens[i].y > h){
  tokens.splice(i,1);

}
}



for (let i = enemies.length - 1; i >= 0; i-- ){

if (dist(player.x,player.y,enemies[i].x,enemies[i].y) <= (player.r + enemies[i].r)/4){
points--;

enemies.splice(i,1);

} else if (enemies[i].y > h){
  enemies.splice(i,1);

}

}
textSize(20);
text(`points : ${points}`, w/30, h-10);

if(points >= 4){
  state = 'level 2';
} else if (points <= 0){

  state = 'gameover';
}


}

function level1MouseClicked(){
//points ++ ;
//console.log('points = ' + points);

//if (points >= 10){
  //state = 'you win';
//}

}

function level2(){
  background(100,10,200);
  //text('click for points',w/2,h - 50);
  textSize(50);
text('Level 2!',40,40);
  if (random(1) <= 0.03){
  tokens.push(new Token());
  }

  if (random(1) <= 0.04){
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

  if (dist(player.x,player.y,tokens[i].x,tokens[i].y)<= (player.r + tokens[i].r)/4){
  points++;

  console.log(points);
  tokens.splice(i,1);

  } else if (tokens[i].y > h){
    tokens.splice(i,1);

  }
  }



  for (let i = enemies.length - 1; i >= 0; i-- ){

  if (dist(player.x,player.y,enemies[i].x,enemies[i].y) <= (player.r + enemies[i].r)/4){
  points = points - 5;

  enemies.splice(i,1);

  } else if (enemies[i].y > h){
    enemies.splice(i,1);

  }

  }
  textSize(20);
  text(`points : ${points}`, w/30, h-10);

  if(points >= 10){
    state = 'level 3';
  } else if (points <= 0){

    state = 'gameover';
  }


}
function level2MouseClicked(){


}

function level3(){
  background(200,10,200);
  //text('click for points',w/2,h - 50);
  textSize(50);
text('Level 3!',40,40);
  if (random(1) <= 0.03){
  tokens.push(new Token());
  }

  if (random(1) <= 0.07){
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

  if (dist(player.x,player.y,tokens[i].x,tokens[i].y)<= (player.r + tokens[i].r)/4){
  points++;

  console.log(points);
  tokens.splice(i,1);

  } else if (tokens[i].y > h){
    tokens.splice(i,1);

  }
  }



  for (let i = enemies.length - 1; i >= 0; i-- ){

  if (dist(player.x,player.y,enemies[i].x,enemies[i].y) <= (player.r + enemies[i].r)/4){
  points = points - 5;

  enemies.splice(i,1);

  } else if (enemies[i].y > h){
    enemies.splice(i,1);

  }

  }
  textSize(20);
  text(`points : ${points}`, w/30, h-10);

  if(points >= 15){
    state = 'you win';
  } else if (points <= 0){

    state = 'gameover';
  }


}



function level3MouseClicked(){
}


function youWin(){
image(bgImg,300,300,600,600);
textSize(80);
stroke(255);
text('You win!',w/7,h/7);

textSize(30);
text('click anywhere to restart',w/7,h /2)


}




function youWinMouseClicked(){
state = 'title';
points = 1;

}


function gameover(){
  background(100);

  if (lives >= 0){

    text(`${lives} tries left`, w/2, h/2);
    textSize(30);
    text('try again',w/2,h * 3/4)

} else {
text('Game Over', w / 2 , h / 2);
  textSize(30);
  text('click anywhere to restart',w/2,h * 3/4)

}


}




function gameoverMouseClicked(){

  if (lives >= 0){
state = 'level 1';
lives--
} else {
  state ='title';
}
points = 1;
}
