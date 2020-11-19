const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground

var ball;
var ball2;
var chain1
var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground= new Ground(700,30,200,10)

    ball = new pendulum(600,250)
    ball2 = new pendulum(650,250)
    ball3 = new pendulum(700,250)
    ball4 = new pendulum(750,250)
    ball5 = new pendulum(800,250)

    chain1 = new chain(ball.body,{x:600,y:20})
    chain2= new chain(ball2.body,{x:650,y:20})
    chain3= new chain(ball3.body,{x:700,y:20})
    chain4= new chain(ball4.body,{x:750,y:20})
    chain5= new chain(ball5.body,{x:800,y:20})
}

function draw(){
   background("grey") 
   Engine.update(engine)
  ground.display()
  
  ball.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  chain1.display();  
  chain2.display();  
  chain3.display(); 
  chain4.display(); 
  chain5.display(); 

  
}

 //Press up arrow to apply force to the bob using function keyPressed()
 function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-50})
    }
}