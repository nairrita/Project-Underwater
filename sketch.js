
var turtle,turtle_img;
var plastic,plastic_img;
var bg;
var plastics = [];
var score;

var score;
var bg_img;




function preload(){
 
 // witch_img = loadAnimation("images/witch1.png","images/witch2.png");
 // plane_img = loadAnimation("images/plane1.png","images/plane2.png");
  bg_img = loadImage("images/underwater.jpg");
  

}

function setup() {
  createCanvas(1000,400);
  
turtle = new Turtle(50,200);
score=0;
bg_img.x=300;


}

function keyPressed(){
  
  if(keyCode===32){
    
    turtle.jump();
  }

  
}


function draw() {

  
  
  background(bg_img); 

  bg_img.x = bg_img.x-5;

  if(World.frameCount%100===0){
    plastics.push(new Plastic() )
  }

  score=Math.round(World.frameCount/10);



  for(var p of plastics){
    p.move();
    p.display();

    if(turtle.hits(p)){
      gameover.visible=true;
      noLoop();

    }
  }

 turtle.display();
 turtle.fly();
 

 drawSprites();

 textSize(20);
  fill("red");
  text("Score:" + score,800,100)
}

