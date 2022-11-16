class bullet{
    constructor(sx,sy,r){
        this.sx=sx
        this.sy=sy
        this.r=r
    }
    show(){
        push()
        fill(255)
        stroke(255,0,0,180)
        strokeWeight(6)
        circle(this.sx,this.sy,this.r)
        pop()
    }
    update(){
        this.sy+=5
    }





}