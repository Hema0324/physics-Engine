const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine,world,object

function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world;

  object = Bodies.rectangle(200,200,50,50)

  World.add(world,object)

  console.log(object.position)
  

}

function draw() {
  background("blue"); 

 Engine.update(engine)
 
  rectMode(CENTER)

  rect(object.position.x,object.position.y,100,100)


  drawSprites();
}


