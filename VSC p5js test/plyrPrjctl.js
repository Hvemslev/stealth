class projectile{
constructor(x,y){
    this.x=x
    this.y=y
}
show(){
    push()
    fill(255)
    circle(this.x,this.y,4)
    pop()
}
fire(){
    this.y-=10
}

}