var bananaImage,obstacleImage,backImage,score,player_running;
var foodsGroup;
function preload(){
  backImage=loadImage("jungle.png");
  player_running=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(700, 500);
 
  Background=createSprite(200,200);
  Background.addImage(backImage);
  Background.scale=3;
  Background.velocityX=3;
  
  ground=createSprite(200,500,1000,50);
  ground.x = ground.width/2;
  ground.visibility=false;

  monkey=createSprite(100,350);
  monkey.addAnimation("monkey",player_running);
  monkey.scale=0.1;
  foodsGroup = new Group();


  
}

function draw() {
  background(220);

 

  if(keyDown("space")) {
    monkey.velocityY = -9;
  }

  monkey.collide(ground)

  monkey.velocityY = monkey.velocityY + 0.8

  stroke ("white");
  textSize(20);
  fill ("white");
  text("score: "+ score, 500,50);

  if(ground.x <0){
    ground.x=ground.width/2;
  }
  switch(score){
    case 10: player_running.scale=0.12;
    break;
    case 20: player_running.scale=0.14;
    break;
    case 30: player_running.scale=0.16;
    break;
    case 40: player_running.scale=0.18;
    break;
    default: break;
  }

  drawSprites();
  }
  
