class Log
{
    constructor(x,y,width,height,angle)
    {
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        stroke("brown");
        fill("brown");
        rect(0,0,this.w,this.h);
        pop()

    }
}