
function preload(){
seaImg = loadAImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}



function setup(){
  createCanvas(400,400);
  ship = createSprite(100,49,600,200);
  ship = addImage("ship",shipImg);
  sea = createSprite(70,90,20,20);
  sea.x = sea.width/2;
  sea.velocityX = -10;
  sea.visible=false;

}


function draw() {
  background("seaImage");
  if(keyDown("space")){
    ship.velocityY = -10;
  }
  ship.velocityY + ship.velocityY + 0.5;
  if (sea.x<0){
  sea.x = sea.width/2;
}
ship.collide(sea);
drawSprite;
}
