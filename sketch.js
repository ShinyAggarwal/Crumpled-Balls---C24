
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1,box2,box3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,100);
	box1=new Dustbin(550,570,100,20);
	box2=new Dustbin(490,545,20,70);
	box3=new Dustbin(610,545,20,70);
	ground=new Ground(400,590,800,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}


