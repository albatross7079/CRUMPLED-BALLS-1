  /*class Paper  {
    constructor(x,y,width,height)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(1000,650,50,30,options);
    }

        display()   {
            push();
            var pos = this.body.position;
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,50,30);
            stroke(255);
            strokeWeight(3);
        pop();
        }

}
