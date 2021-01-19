class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(300,300,600,10,options);
        this.width=600;
        this.height=10;
        World.add(world,this.body);
     }
     display(){
         var pos=this.body.position;
         fill("yellow");
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
     }
}