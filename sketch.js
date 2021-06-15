const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,600,1200,10)
  box = new Box(900,100,70,70)
  box1 = new Box(800,100,70,70);
  box2 = new Box(700,100,70,70);

 

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display()
  box.display();
  box1.display();
  box2.display();
  


}




