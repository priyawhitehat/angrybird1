const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3,box4;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4,log5;
function setup()
{
	createCanvas(1200,400);
	engine=Engine.create();
	world=engine.world;
	box1=new box(600,380,50,50);
	box2=new box(800,380,50,50);
	ground1=new Ground(600,390,1200,20);
	pig1=new Pig(700,387);
	pig2=new Pig(700,350);
	log1=new Log(700,375,300,20,0);
	box3=new box(600,280,50,50);
	box4=new box(800,280,50,50);
	log2=new Log(700,275,300,20,0);
	box5=new box(700,200,50,50);
	log3=new Log(660,200,150,20,30);
	log4=new Log(750,200,150,20,-30);
}

function draw()
{
	background("lightgreen");
	Engine.update(engine);
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	ground1.display();
	pig1.display();
	pig2.display();
	log1.display();
	log2.display();
	log3.display();
	log4.display();
}
 


