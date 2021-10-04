var ipath,path
var boy,iboy
function preload(){
  //pre-load images
ipath=loadImage("path.png")

iboy=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite (200,200);
path.addImage (ipath)
path.velocityY =4;
path.scale=1.2

boy=createSprite(200,290,10,20)
boy.scale=0.1
boy.addAnimation("running",iboy)
}

function draw() {
  background(0);

if(path.y> 400){
  path.y=height/2
}
  drawSprites();
}
