const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var stones = [];
var base1;
var jointPoint;
var bridge;
var stone;

var jointLink, jointPoint;

function setup() 
{
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base1 = new Base(100, 450, 200, 100);
  bridge = new Bridge(20,{x: 30, y:450});

  jointPoint = new Base(1100,450,200,100)
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for(var i=0; i<9; i++)
  {
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 100);
    stone = new Stone(x,y,30);
    stones.push(stone);
  }

  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  base1.show();
  jointPoint.show();
  bridge.show();

  for(var i=0; i<9; i++)
  {
    stones[i].show();
  }
}
