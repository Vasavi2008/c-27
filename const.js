class Connection{
 constructor(b1, b2){
var options= {
bodyA:b1,
bodyB:b2,
length : 50,
stiffness : 1,
}
this.connection = Constraint.create(options);
World.add (world,this.connection)


 }  
 display(){
     var p1 = this.connection.bodyA.position;
     var p2 = this.connection.bodyB.position;
    strokeWeight(3);
    line(p1.x ,p1.y , p2.x, p2.y)
 }
}