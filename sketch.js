const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);

    box3 = new Box(840,320,70,70);
    box4 = new Box(770,240,70,70);

    box5 = new Box(840,320,70,70);
    box6 = new Box(910,240,70,70);
    box7 = new Box(910,320,70,70);
    box8 = new Box(980,320,70,70);
    box9 = new Box(840,170,70,70);

   
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:230});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
  
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    

    bird.display();
    
    slingshot.display();   
       
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}