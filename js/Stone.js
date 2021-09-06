class Stone
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution:0.8
        };
        this.radius = r;
        console.log(r);
        this.body = Bodies.circle(x,y,r,options);
        console.log(r);
        World.add(world, this.body);
    } 

    show()
    {
        ellipseMode(CENTER);
        push();
        noStroke();
        translate(this.body.position.x, this.body.position.y);
        fill("white");
        ellipse(0,0,this.radius*2,this.radius*2);
        pop();
    }
}