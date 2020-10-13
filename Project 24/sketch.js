
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(300,300)

	Engine.run(engine);

}

	
  

	


function draw(){
    background("red");
    Engine.update(engine);
    strokeWeight(4);
text(mouseX+","+mouseY,mouseX,mouseY)




  
  dustbin1.display();




}



