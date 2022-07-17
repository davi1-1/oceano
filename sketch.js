var oceano, oceanoIMG;
var shipIMG, ship;

function preload() {
 shipIMG = loadAnimation("ship-1.png", "ship-2.png");
  oceanoIMG = loadImage("sea.png");

}

function setup() {
createCanvas(600, 200);

oceano = createSprite(200,140,20,50);
oceano.addImage(oceanoIMG);
oceano.scale = 0.2;
oceano.velocityX= 2;

ship = createSprite(300,100,20,50);
ship.addAnimation("IMG", shipIMG);
ship.scale= 0.2;

}

function draw() {
background(220);


if(oceano.x  < 0) 
{
   oceano.x = oceano.width/5;
}

drawSprites();
}