var car,wall;
var speed,weight;

function setup(){

 createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1500);


}


function draw() {
  background(255,255,255); 
  car=creatSprite(50,200,50,50);
   wall=creatSprite(1500,200,60,height/2);
   wall.shapeColor(80,80,80);
   car.velocityX=speed;
  drawSprites();
}