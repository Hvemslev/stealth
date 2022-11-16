function movement(){
let speed=3

    if(keyIsDown(87)){
    playr.movement.set(0,-speed)
    playr.move()
}
if(keyIsDown(83)){
    playr.movement.set(0,speed)
    playr.move()
}
if(keyIsDown(68)){
    playr.movement.set(speed,0)
    playr.move()
}
if(keyIsDown(65)){
    playr.movement.set(-speed,0)
    playr.move()
}




}