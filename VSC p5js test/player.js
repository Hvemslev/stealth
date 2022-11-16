class player{
    constructor(posx,posy){
        this.pos=createVector(posx,posy)
        this.movement=createVector(0,0)
    }
    show(){
        fill(255)
        triangle(this.pos.x,this.pos.y,this.pos.x+5,this.pos.y+10,this.pos.x-5,this.pos.y+10)
        //rect(this.pos.x,this.pos.y,10,10)
    }
    move(){
        this.pos.add(this.movement)
    }







}