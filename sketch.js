var jack, jack_running,groundimage;
var ground,invisibleground1,invisibleground2;
function preload(){
  //pre-load images
  jack_running=loadAnimation("Runner-1.png","Runner-2.png")
groundimage=loadAnimation("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  
  ground=createSprite(200,200)
  ground.addAnimation("ground",groundimage)
    ground.scale=1.2
  ground.velocityY=4;

  jack=createSprite(150,390,20,20)
  jack.addAnimation("jack",jack_running)
  jack.scale=0.05 

  invisibleground1=createSprite(280,200,10,400)
 invisibleground1.visible=false;

  invisibleground2=createSprite(120,200,10,400)
  invisibleground2.visible=false;
}

function draw() {
  background(200);
if(keyDown("right")){
  jack.x=jack.x+2;
}
if(keyDown("left")){
  jack.x=jack.x-2;
}

if(ground.y>400){
ground.y=height/2;
}
jack.collide(invisibleground1)
jack.collide(invisibleground2)
drawSprites()
}
