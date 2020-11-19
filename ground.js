class Ground
{
    constructor(x,y,width,height)
    {
        var options={'isStatic':true}
        this.body= Bodies.rectangle(700,30,300,10,options)
        
            World.add(world,this.body)
            this.width=width 
            this.height=height
    }
   
    display()
    {
        rectMode(CENTER)
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
    
    



}