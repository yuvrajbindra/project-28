class Mango{
	constructor(x,y,r){	
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
        this.image = loadImage("mango.png");
		this.body=Bodies.circle(x, y, r, options);
		this.r=r;
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r*4, this.r*4)
		pop()
 }
}