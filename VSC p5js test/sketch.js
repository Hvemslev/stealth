let bullets=[];
let Player
let playr

function setup() {
  createCanvas(400, 500);
  playr=new player(width/2,300)
  Player = new Ship;
}

function draw() {
  background(220);
  Player.move();
  Player.display();

  playr.show()
  movement()


  if(random(0,100)<20){
    var bllt = new bullet(random(width),0,10)
    bullets.push(bllt)
  }

  //for(i=bullets.length-1;i<-1; i--){
    for(i=0;i<bullets.length; i++){
    bullets[i].show()
    bullets[i].update()

    if(bullets[i].sy>height){
      bullets.splice(i,1)
    }
  }
}

  //player
  class Ship{
    constructor() {
      this.x = 200;
      this.y = 400;
      this.diameter = 30;
      this.speed = 5;
    }
  
    move() {
      if (keyIsPressed) {
     if (keyCode == RIGHT_ARROW) {
      this.x += 3; 
     }  else if (keyCode == LEFT_ARROW) {
       this.x -= 3;
     } else if (keyCode == UP_ARROW) {
       this.y -= 3; 
     } else if (keyCode == DOWN_ARROW) {
       this.y +=3; 
     }
    }
    }
  
    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
      
    }

