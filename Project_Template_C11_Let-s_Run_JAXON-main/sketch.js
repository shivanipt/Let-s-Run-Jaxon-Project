var trackImage, track, track2, invRightEdge, invLeftEdge, invTopEdge;
var playerImage, player;

function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  playerImage = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //track sprite
  track = createSprite(200, 100, 400, 400);
  track.addImage("path.png", trackImage);
  track.y = track.length/2;
  track.velocityY = 4;
  track.scale = 1.2;

  //player sprite
  player = createSprite(200, 200);
  player.addAnimation("running", playerImage);
  player.scale = 0.1;
  player.velocityY = -2;

  //createing invisible right edge
  invRightEdge = createSprite(0, 0, 100, 800);
  invRightEdge.visible = false;

  //creating left edge
  invLeftEdge = createSprite(410, 0, 100, 800);
  invLeftEdge.visible = false;

  //creating top edge
  invTopEdge = createSprite(10, 10, 400, 10);
  invTopEdge.visible = false;
}

function draw() {
  background(220);

  createEdgeSprites();

  player.collide(edges[3]);

  player.x = World.mouseX;

  if(track.y>400){
    track.y = height/2;
  }
  drawSprites();

}
