class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("tree.png")
    }
display(){
    imageMode(CENTER);
    var pos= this.tree.position;
    image(this.image,pos.x,pos.y,600,600);
}
}