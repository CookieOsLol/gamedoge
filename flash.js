class flash {
  constructor (_xPos,_yPos,_rotation){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
 }

  display(){

  fill(0,240,240);
    push();
    translate(this.xPos,this.yPos);

    rectMode(CENTER);

  rect(width * 0.3,height * 0.4,width * 0.05 , height * 0.05);

 pop();
  }



  move()
    {

    if (this.yPos <= height * 1.08){

      this.yPos += 20;
    } else {
      this.yPos = 0;
    }

    }
  }
