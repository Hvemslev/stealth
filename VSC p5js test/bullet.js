class bullet{
    constructor(sx,sy,r){
        this.sx=sx
        this.sy=sy
        this.r=r
    }
    show(){
        circle(this.sx,this.sy,this.r)
    }
    update(){
        this.sy+=5
    }





}