class player{
    constructor(posx,posy){
        this.pos=createVector(posx,posy)
        this.movement=createVector(0,0)
    }
    show(){
        rect(this.pos.x,this.pos.y,10,10)
    }
    move(){
        this.pos.add(this.movement)
    }







}