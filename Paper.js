class Paper{
    constructor(x,y){
        var options = {
        'isStatic':false,
        'restsitution':0.3,
        'friction':0.5,
        'density':1.2,
        } 
        this.radius = 70;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        
        }
        display(){
         var pos = this.body.position;
         var angle = this.body.angle;

         push();
         translate(pos.x, pos.y);
         rotate(angle);
         fill("white");
         imageMode(CENTER)
         image(this.image,0,0,this.radius,this.radius);
        
         //image(img , x ,y , width ,height)

         pop();
       }
    }