class player{
    constructor(posx,posy){
        this.pos=createVector(posx,posy)
        this.movement=createVector(0,0)
        this.r=255
        this.g=255
        this.b=255
    }
    show(){
        fill(this.r,this.g,this.b)
        triangle(this.pos.x,this.pos.y,this.pos.x+5,this.pos.y+10,this.pos.x-5,this.pos.y+10)
        //rect(this.pos.x,this.pos.y,10,10)
    }
    move(){
        this.pos.add(this.movement)
    }







}