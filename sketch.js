const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, ball, ground


function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 380, 400, 20, options)
  World.add(world,ground)

  var options = {
    restitution: 1.5
  }
  ball = Bodies.circle(100, 100, 10, options)
  World.add(world,ball)
  
}

function draw() {
  background(0);  
  rectMode(CENTER)
 Engine.update(engine)
 fill("red")
 rect(ground.position.x, ground.position.y, 400, 20)

 ellipseMode(RADIUS)
 fill("blue")
 ellipse(ball.position.x, ball.position.y, 20, 20)
}