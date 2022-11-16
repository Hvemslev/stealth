class projectile{
constructor(x,y){
    this.x=x
    this.y=y
}
show(){
    circle(this.x,this.y,4)
}
fire(){
    this.y-=10
}

}