var monkey, player_running; 
var bdImage, bananaImage, obstacleImage;
var banana, obstacle,ground;
var obstacleGroup, bananaGroup;
var gameState= "start";
var score=0;
var ground;
function preload() {
player_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bdImage= loadImage("jungle.jpg");
bananaImage= loadImage("banana.png");
obstacleImage= loadImage ("stone.png");
}
function setup() {
  createCanvas(400, 400);
  bg= createSprite(0,0);
  bg.addImage(bdImage);
  bg.scale= 1.5 ;
  monkey= createSprite(50,300);
  monkey.addAnimation("running",player_running)
  monkey.scale=0.2;
 
  //monkey.debug=true;
invig= createSprite(200,390,400,10);
  invig.visible=false;
  bananaGroup= createGroup();
  obstacleGroup= createGroup();
 
}

function draw() {
  background(0); 
  
if (gameState=="start"){
 bg.velocityX= -1; 
  if (bg.x<0){
    bg.x=bg.width/2
  }
  
 monkey.velocityY = monkey.velocityY + 0.8;

 if (keyDown("space")&&monkey.y>= 250){
   monkey.velocityY= -12;
 }
 if (monkey.isTouching(bananaGroup)){ 
  score+=10;
   bananaGroup.destroyEach();
     }
  if (monkey.isTouching(obstacleGroup)){ 
  score= score-1
     }
  if (score==-1){
    gameState="end";
  }
  Banana();
  Obstacles();
}
 else if(gameState=="end"){
 bg.velocityX= 0;

obstacleGroup.setVelocityXEach(0);
bananaGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(2);
bananaGroup.setLifetimeEach(2); 
 }
     drawSprites(); 
  
 stroke("white");
  fill("white");
  textSize("20");
  text("Score: "+ score,300,90);  
 
   
 
   monkey.collide(invig);
 

    fill("black");
   text(mouseX+","+mouseY,mouseX,mouseY);
  


 
function Banana(){
if (frameCount % 50===0){
var banana=  createSprite(400,60,20,20); 
banana.y=random(200,300);
banana.addImage(bananaImage);
banana.velocityX= -4;
banana.scale= 0.05;
bananaGroup.add(banana);

}
}
function Obstacles() {
if(frameCount % 200 === 0) {
var obstacle = createSprite(380,345,10,40);
obstacle.velocityX = -2;
obstacle.scale = 0.1;
obstacle.lifetime = 210     ;     
obstacleGroup.add(obstacle);
obstacle.addImage(obstacleImage);

  }
}
}