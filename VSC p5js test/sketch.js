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
let stage

var music
var Laser



function setup() {
  createCanvas(400, 500);
  music = loadSound("Boss Time by David Renda.mp3", loaded);
  Laser = loadSound("sci-fi-laser-gun-shot-sound-effect.mp3", loaded);
  Laser.setVolume(0.1)
  music.setVolume(0.3)
  playr=new player(width/2,300);
  plHP=10

  BossMaxHP=5
  bossDamage=0

  name1=random(names)
  title=random(titles)
  
  stage = 0
}

function loaded(){
  music.loop();
  
}

function draw() {
  background(0);
  if(plHP > 1 && stage == 1|| BossMaxHP > 1 ) {
    stage = 2;
}
  if(stage == 0){
    textAlign(CENTER,CENTER);
    fill(255)
    textSize(16);
    text("CLICK WHEN READY",width / 2,height / 4);
  }
  //----------------------------------------------------------------------------------//
  else if (stage == 1){
  
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
      bullets.splice(i,1)
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

if(keyIsDown(32)){
  shoot();
  Laser.play();
}

bossbar()

fill(255)
strokeWeight(0)
textSize(15)
text("HP: "+plHP,20,20)
}
//-----------------------------------------------------------------------------------------//
else if (stage == 2) {

  textAlign(CENTER,CENTER);
  fill(255)
  textSize(16);
  text("GAME OVER CLICK TO RESTART",width / 2,height / 4);

    
}



}

function mouseClicked() {
  if(stage == 0){
  stage = 1;
  } 
  
  
  if(stage == 2){
    music = loadSound("Boss Time by David Renda.mp3", loaded);
    Laser = loadSound("sci-fi-laser-gun-shot-sound-effect.mp3", loaded);
    Laser.setVolume(0.1)
    music.setVolume(0.3)
    playr=new player(width/2,300);
    plHP=10
  
    BossMaxHP=50
    bossDamage=0
  
    name1=random(names)
    title=random(titles)
    
    stage = 0
  } 
  
}