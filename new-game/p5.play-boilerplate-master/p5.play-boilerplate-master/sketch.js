
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    player = new Players(100,100,20,80);
    coin = new Coin(600,200,30,30);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    player.display();
    coin.display();
}

