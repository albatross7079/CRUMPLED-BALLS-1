var ground,
var box1,box2,box3;
var paper1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	


	engine= Engine.create();
	world = engine.world
	
	
	var ground_options = {
        isStatic: true
    }

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);


	box1 = new Box(350,630,400,30);
	box2 = new Box(550,550,30,200);
	box3 = new Box(150,550,30,200);
	
	paper1 = new Paper();
	
	 Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	
	box1.display();
	box2.display();
	box3.display();
    fill(255);
	rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
 
	paper1.display();

  drawSprites();
 
}

	function keyPressed()	{
		if(keyCode===UP_Arrow)	{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

		}
	}



