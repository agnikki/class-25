class Log extends Baseclass{
  constructor(x,y,width,angle){
      super(x,y,width,30,angle);
      this.image=loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body,angle);  
  }
}