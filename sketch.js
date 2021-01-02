const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,ball;
var myEngine,myworld;
//var box1,box2;
function setup() {
  createCanvas(600,600);
  myEngine=Engine.create();
  myworld=myEngine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(300,570,600,30,options);
  World.add(myworld,ground);
  
  console.log(ground);
  var options = {
    restitution:1
  }
  ball = Bodies.circle(300,300,25,options)
  World.add(myworld,ball);
}
function draw() {
  background("black");
  Engine.update(myEngine);  
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,30);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25);
  //rect(groun)
  //drawSprites();
}