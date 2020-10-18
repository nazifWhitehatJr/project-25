class Dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      this.left = Bodies.rectangle(width-300,610,20,100,options);
      this.right = Bodies.rectangle(width-100,610,20,100,options);
      this.bottom = Bodies.rectangle(width-200,650,200,20,options);
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.left);
      World.add(world, this.right);
      World.add(world, this.bottom);

    }
    display(){
      var pos = this.bottom.position;
      push();
      rectMode(CENTER);
      //translate(pos.x, pos.y)
      fill("white");
      //rect(width-300,610,20,100);
      //rect(width-100,610,20,100);
      //rect(width-200,650,200,20);

      image(this.image,900,450,200,250);
      pop();
    }
  };
