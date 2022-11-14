let bullets=[];
let playr

function setup() {
  createCanvas(400, 400);
  playr=new player(width/2,300)
}

function draw() {
  background(220);

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
