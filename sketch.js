const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
function preload(){
    bgImage=loadImage("sprites/background.png");
} 
function setup(){
     createCanvas(600,400);
    bg=createSprite(400,0,600,400);
    bg.velocityX=-3;
    bg.scale=1.2;
bg.addImage(bgImage);
bg.x=bg.width/2;
    engine = Engine.create();
    world = engine.world;

   ground=new Ground();

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    if(bg.x<0){
        bg.x=bg.width/2;
    }
   
    ground.display();

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    drawSprites();
}