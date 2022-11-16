class player{
    constructor(posx,posy){
        this.pos=createVector(posx,posy)
        this.movement=createVector(0,0)
    }
    show(){
        push()
        fill(255)
        stroke(0)
        strokeWeight(1)
        triangle(this.pos.x,this.pos.y,this.pos.x+5,this.pos.y+10,this.pos.x-5,this.pos.y+10)
        pop()
    }
    move(){
        this.pos.add(this.movement)
    }







}