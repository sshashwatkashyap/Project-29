class Polygon{

    constructor(x, y, width, height){
   
     var options = {
   
      'isStatic':false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
      
     }
   
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     
     this.image = loadImage("Hexagon0.png");
       
     World.add(world, this.body)
   
    }
   
    display(){
   
     var pos = this.body.position
   
     push()

     imageMode(CENTER)
   
     translate(pos.x, pos.y)
   
     rotate(this.body.angle)
  
     image(this.image, 0, 0, this.width, this.height);
   
     pop()
   
   }
   }