var sea, seaImg;
var ship, shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,200,10,10);
  sea = createSprite(200,100,30,30);
  sea.addImage(seaImg);
  sea.x = sea.width/2;

}

function draw() {
background("blue");

if(sea.x < 0){
  sea.x = sea.width/2;
}

drawSprites();
}
