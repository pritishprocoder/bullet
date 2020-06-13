var ball1,ball2,ball3,ball4;
var car1,car2,car3,car4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload();{

}




function setup() {
  createCanvas(800,400);
  ball1=createSprite(200,100, 10, 10);
  ball2=createSprite(200,100, 10, 10);
  ball3=createSprite(200,100, 10, 10);
  ball4=createSprite(200,100, 10, 10);
  car1=createSprite(700,100,30,10);
  car2=createSprite(700,100,30,10);
  car3=createSprite(700,100,30,10);
  car4=createSprite(700,100,30,10);
  
  engine = Engine.create();
	world = engine.world;







  Engine.run(engine);

}

function draw() {
  display();
  rectMode(CENTER);
  background(0,0,0);
   
  drawSprites();
 
}
function display(){
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  car4.display();
  car1.display();
  car2.display();
  car3.display();
}