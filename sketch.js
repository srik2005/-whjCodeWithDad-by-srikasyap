var father,child,score,b,bg,fi,ci


function setup() {
  createCanvas(400,400);
  b = createSprite(200,200,400,400)
  bg = loadImage("bg.jpg")
  fi = loadImage("fa.png")
  ci = loadImage("ch.png")
  father= createSprite(200, 200, 50, 50);
  child = createSprite(350,50,20,20)
  father.addImage(fi)
  child.addImage(ci)
  child.scale = 0.5
  text("Father",father.x,father.y+50)
 
  b.velocityX = 2;
  b.addImage(bg)
  b.scale = 5
  
  score = 0;

}

function draw() {
  background(0);
if(b.x>0){
    b.x=200;
    }
  father.shapeColor = "green"
  child.shapeColor = "blue" 
  if(keyDown(LEFT_ARROW)){
father.velocityX = -2
father.velocityY = 0
  } 
  if(keyDown(RIGHT_ARROW)){
    father.velocityX = 2
    father.velocityY = 0
      } 
      if(keyDown(UP_ARROW)){
        father.velocityX = 0
        father.velocityY = -2
          } 
          if(keyDown(DOWN_ARROW)){
            father.velocityX = 0
            father.velocityY = 2
              } 
if(father.collide(child)){
child.destroy();

child = createSprite(random(0,400),random(0,400),20,20)
child.addImage(ci)
child.scale=0.5
score = score+1
father.scale + 2
}


  drawSprites();
  
text("score = "+score,100,100)
if(score === 5){
  father.destroy();
  child.destroy();
  textSize(35)
  fill("gold")
  text("Happy Father's Day",20,200)
  
  }
}