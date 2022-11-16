let bullets=[];
let shots=[]
//let Player
let playr
let BossMaxHP,bossDamage
let names=["Your Mom","Your Dad"]
let titles=[", the destroyer", ", the Annihilator", ", Eater of Worlds", ": Judge, Jury and Executioner", ", the Iron Sandal"]
let name1
let title
let plHP

function setup() {
  createCanvas(400, 500);
  playr=new player(width/2,300)
  //Player = new Ship;
  plHP=10

  BossMaxHP=100
  bossDamage=0

  name1=random(names)
  title=random(titles)
function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);
  //Player.move();
  //Player.display();

  playr.show()
  movement()


  if(random(0,100)<20){
    var bllt = new bullet(random(width),0,10)
    bullets.push(bllt)
  }
    for(i=0;i<bullets.length; i++){
    bullets[i].show()
    bullets[i].update()

    d=dist(bullets[i].sx,bullets[i].sy,playr.pos.x,playr.pos.y)
    if(d<10){
      plHP-=1
    }
      

    if(bullets[i].sy>height){
      bullets.splice(i,1)
    }
  }

  for(i=0;i<shots.length;i++){
    shots[i].show()
    shots[i].fire()
    if(shots[i].y<0){
      bossDamage++
      shots.splice(i,1)
    }

  }

console.log(shots.length)

if(keyIsDown(32)){
  shoot()
}

bossbar()

fill(0)
strokeWeight(0)
textSize(10)
text("HP: "+plHP,20,20)

}

  //player
  /*class Ship{
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
      
    }*/

}
