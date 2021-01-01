var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="Green";

  movingRect= createSprite(200,100,80,50);
  movingRect.shapeColor="Green";
}

function draw() {
  background(0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2  &&
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 )
     {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
else {
  fixedRect.shapeColor="Green";
  movingRect.shapeColor="Green";
}

  drawSprites();
}