var walk , running,ground,groundImage,gro;
var relic ,relicImage, obstacle, obstacleImage;
var obstacleGroup,bossminion;
var survivalTime = 0;
var gameState = "play";
var score,restartImage,rs,gameOverImage,gameOver;
var bosslife=1000

var nature,obs

function preload(){
   running = loadAnimation("2021-01-13_20-10-00.jpg","2021-01-13_20-12-46.jpg","2021-01-13_20-17-23.jpg","2021-01-13_20-25-51.jpg","2021-01-13_20-40-05.jpg")
  relicImage = loadImage("ab982f580f33ff6a33270f24393a0026.png");
  obstacleImage = loadImage("2021-01-13_21-47-01.jpg");
  groundImage = loadImage("2021-01-13_21-42-45.jpg");
  restartImage = loadImage("fb948266612f2961782b379208c471d433f86356_hq.gif");
  gameOverImage = loadImage("tumblr_m1ioeoCEz41r8qraao1_500.gif");
  nature = loadImage("orc07.png")
  obs = loadImage("2021-01-14_9-09-28.jpg");
}

function setup() {
  createCanvas(1100,600);
  score=0;
  

  
  orge=createSprite(800,270)
  orge.addAnimation("orge",nature);
  orge.scale=0.6
  orge.visible=false;


  ground = createSprite(600,550,10,10);
  ground.addAnimation("ground",groundImage);
  ground.scale=1;
  ground.velocityX=-7;
  
  walk=createSprite(70,400,10,10);
  walk.addAnimation("walk",running);
  walk.scale=1;
   
  gro = createSprite(40,430,1100,10);
  gro.visible = false;
  
  gameOver=createSprite(500,290);
  gameOver.addImage("over",gameOverImage);
  gameOver.scale=1;
  gameOver.visible = false;
  gameOver.scale=1.9;
  
  
  rs=createSprite(500,550);
  rs.addImage("reset",restartImage);
  rs.scale=0.4;
  rs.visible = false;



  
  
  obstaclesGroup = new Group();
  bossminion = new Group();
}

function draw()
{
    background(112,224,253);


    
  textSize(30);
  text("bosslife "+bosslife,600,80)


    walk.collide(gro);
    if(gameState == "play" )
      {

        if(survivalTime===100){
      
       orge.visible=true
    }


    if(walk.isTouching(orge)){
      bosslife = bosslife-250
      orge.velocityX=0
      orge.x=800;
     
    }

    

  
    if(survivalTime == 200){
      orge.velocityX=-3;

    }
    if(survivalTime == 1000){
      orge.velocityX=-3;

    }
    if(survivalTime == 1900){
      orge.velocityX=-3;
    }
    if(survivalTime == 2800){
      orge.velocityX=-3;
    }

    if(bosslife===0){
      orge.velocityY=2
    }
    
    
     camera.y=walk.y


       if(frameCount%150==0){
         haha();
       }
        survivalTime = survivalTime+1;
        if(ground.x < 0)
            {
              ground.x = ground.width/2; 
            }
        if(keyDown("space"))
            {
              walk.velocityY=-19;
              camera.y=walk.y;
              
            }
        walk.velocityY = walk.velocityY + 0.8;

        if(World.frameCount%100==0)
            {
              obstacles();
            }
        
      }
        if(obstaclesGroup.isTouching(walk))
            {
              gameState = "end";
            }

         if(bossminion.isTouching(walk)){
           gameState = "end";
         }   
  
        if(gameState == "end")
            {
              ground.velocityX = 0;
              
              obstaclesGroup.setLifetimeEach(0);
              bossminion.setLifetimeEach(0);
              walk.velocityY= 0;
              rs.visible = true;
              gameOver.visible = true;
              orge.velocityX=0
              orge.y=800
              
            }
  
  if(mousePressedOver(rs)&&gameState == "end") 
   {
    gameState = "play";
    gameOver.visible = false;
    rs.visible = false;
    score = 0;
    ground.velocityX=-7;
   }
    drawSprites();
    textFont("MeninBlue");
    textSize(30);
    text("Defeat the monster ",5,80);
    text("Survival Time:"+ survivalTime,70,130);

   
 
   


}

function haha() 
  {
    apple = createSprite(600,50,10,10);
     apple.addImage("apple",obs);
     apple.y =390;
     apple.lifetime = 1000/5;
     apple.velocityX = -7;
     bossminion.add(apple);
     apple.scale=2;
   }


 
function obstacles() 
  {
     obstacle = createSprite(600,450,10,10);
     obstacle.addImage("apple",obstacleImage);
     
     obstacle.y =380;
     obstacle.lifetime = 1000/5;
     obstacle.velocityX = -7;
     obstaclesGroup.add(obstacle);
     obstacle.scale=0.8;
   }

