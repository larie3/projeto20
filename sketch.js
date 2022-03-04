
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3;
var engine;
var world;
var plane;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	var plane_opitons = {
		isStatic:true
	  }

	  
	var block1_opitons = {
		restitution: 0.5,
		frection:0.02,
		frictionAir:0
	}

	var block2_opitons = {
		restitution: 0.7,
		frection:0.01,
		frictionAir:0.1
	}

	var block3_opitons = {
		restitution: 0.01,
		frection:1,
		frictionAir:0.3
	}

	//Crie os Corpos Aqui.
    block1 = Bodies.circle(220,10,10,block1_opitons);
	World.add(world,block1);
	block2 = Bodies.rectangle(110,50,10,10,block2_opitons);
	World.add(world,block2);
    block3 = Bodies.rectangle(350,10,10,30,block3_opitons);
	World.add(world,block3);
	plane = Bodies.rectangle(600,580,1200,20,plane_opitons);
	World.add(world,plane);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,1200,20);
  ellipse(block1.position.x,block1.position.y,10,10);
  rect(block2.position.x,block2.position.y,10,10);
  rect(block3.position.x,block3.position.y,10,30);
}