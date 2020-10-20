class Launcher{
    constructor(bodyA, pointB){
        var options = {
 
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }

        this.launcher = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.launcher);

    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(9);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()	
        }    
    
        if(this.launcher.velocityX>3){

            World.remove(world, this.launcher)

        }

    }

    fly(){

        this.launcher.bodyA = null; 

    }	  
    
    attach(body){

        this.launcher.bodyA = body;

    }

}



