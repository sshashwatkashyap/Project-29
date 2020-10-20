const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var block, polygon, platform, launcher;

function setup() {
  
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  platform1 = new Platform(600, 375, 200, 25)

  //Seventh floor
  block1 = new Block(525, 350, 25, 45);
  block2 = new Block(550, 350, 25, 45);
  block3 = new Block(575, 350, 25, 45);
  block4 = new Block(600, 350, 25, 45);
  block5 = new Block(625, 350, 25, 45);
  block6 = new Block(650, 350, 25, 45);
  block7 = new Block(675, 350, 25, 45);

  //Sixth Floor
  block8 = new Block(537, 300, 25, 45);
  block9 = new Block(562, 300, 25, 45);
  block10 = new Block(587, 300, 25, 45);
  block11 = new Block(612, 300, 25, 45);
  block12 = new Block(637, 300, 25, 45);
  block13 = new Block(662, 300, 25, 45);

  //Fifth Floor
  block14 = new Block(549, 250, 25, 45);
  block15 = new Block(574, 250, 25, 45);
  block16 = new Block(599, 250, 25, 45);
  block17 = new Block(624, 250, 25, 45);
  block18 = new Block(649, 250, 25, 45);

  //Fourth Floor
  block19 = new Block(561, 200, 25, 45);
  block20 = new Block(586, 200, 25, 45);
  block21 = new Block(611, 200, 25, 45);
  block22 = new Block(636, 200, 25, 45);

  //Third Floor
  block23 = new Block(573, 150, 25, 45);
  block24 = new Block(598, 150, 25, 45);
  block25 = new Block(623, 150, 25, 45);

  //Second Floor
  block26 = new Block(585, 100, 25, 45);
  block27 = new Block(610, 100, 25, 45);

  //First Floor
  block28 = new Block(597, 50, 25, 45);

  polygon = new Polygon(50, 200, 65, 70);
  
  launcher = new Launcher(polygon.body, {x:100, y:250});

}

function draw() {

  background("yellow");  
  
  Engine.update(engine);

  drawSprites();

  launcher.display();

  //Seventh Floor
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  //Sixth Floor
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  //Fifth Floor
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  //Fourth Floor
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  //Third Floor
  block23.display();
  block24.display();
  block25.display();

  //Second Floor
  block26.display();
  block27.display();

  //First Floor
  block28.display();

  platform1.display();

  polygon.display();

  //mouseDragged();

  //mouseReleased();

  //keyPressed();

}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

  launcher.fly();

}  