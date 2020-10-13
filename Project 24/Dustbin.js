class Dustbin {
constructor(x,y,width,height){
this.angle=0
this.x=x
this.y=y
this.width=20
this.height=100
this.body=Bodies.rectangle(this.x,this.y,width,height)
World.add(world, this.body);

}
display(){
    var pos =this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(this.angle)
    fill ("red")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    
    pop()
}









}





    


































