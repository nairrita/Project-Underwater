
var witch,witch_img,witchrotate_img;
var plane,plane_img;
var bg,bg_img;
var planes = [];
var score;
var gameover,gameover_img;
var score;

function preload(){
 
  witch_img = loadAnimation("images/witch1.png","images/witch2.png");
  plane_img = loadAnimation("images/plane1.png","images/plane2.png");
  bg_img = loadImage("images/bg0.png");
  gameover_img=loadImage("images/gameover.png")

}

function setup() {
  createCanvas(1000,400);
  gameover=createSprite(500,200,10,10);
  gameover.addImage("img",gameover_img);
  gameover.visible=false;
witch = new Witch(50,200);
score=0;

}

function keyPressed(){
  
  if(keyCode===32){
    
    witch.jump();
  }
}


function draw() {

  
  
  background(bg_img); 

  if(World.frameCount%100===0){
    planes.push(new Plane() )
  }

  score=Math.round(World.frameCount/10);



  for(var p of planes){
    p.move();
    p.display();

    if(witch.hits(p)){
      gameover.visible=true;
      noLoop();

    }
  }

 witch.display();
 witch.fly();
 

 drawSprites();

 textSize(20);
  fill("red");
  text("Score:" + score,800,100)
}

