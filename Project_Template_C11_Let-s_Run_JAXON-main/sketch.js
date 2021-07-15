var track, invRightEdge, invLeftEdge;
var player;

function preload(){
  //pre-load images
  track = loadImage("path.png");
  player = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //player sprite
  player = createSprite(300, 100);
  player.addAnimation("Runner-1.png", "Runner-2.png");

  //track sprite
  track = createSprite(200, 200);
  track.addImage("path.png");
  track.y = track.length/2;
  track.velocityY = 4;
  track.scale = 1.2

  //createing invisible right edge
  invRightEdge = createSprite(10, 10, 10, 400);
  invRightEdge.visible = false;

  //creating left edge
  invLeftEdge = createSprite(390, 10, 10, 400);
  invLeftEdge.visible = false;
}

function draw() {
  background(220);

  player.x = World.mouseX;

  player.collide(invLeftEdge, invRightEdge);

  if(track.y>400){
    track.y = track.length/2;
  }

  drawSprites();
}
