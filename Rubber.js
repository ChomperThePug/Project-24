class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
     restitution : 0.95,
	 friction : 4, 
	 density: 0.3
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos = this.body.position;		
			push()
			//translate(rubberpos.x, rubberpos.y);
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
           ellipse(0 ,0 , this.r, this.r);
			pop()
	}

}