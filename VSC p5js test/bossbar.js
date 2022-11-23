function bossbar(){
    push()
    fill(50)
    rect(40,height/8*7,320,20)
    fill(255,0,0)
    rect(40,height/8*7,320-bossDamage/BossMaxHP,20)
    fill(255)
    stroke(0)
    strokeWeight(2)
    textSize(15)
    text(name1+title,40,height/8*7-15)
    pop()
}