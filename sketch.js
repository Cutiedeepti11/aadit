var z,g;
var h,y;
function setup() {
  createCanvas(800,400);
  z=createSprite(400, 200, 50, 50);
  g=createSprite(200,200,20,20)
  h=createSprite(50, 100, 50, 50);
  y=createSprite(50,400,200,20)
  h.velocityY=2;
  z.debug=true;
  g.debug=true;
  z.shapeColor="pink"
  g.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  z.x=World.mouseX;
  z.y=World.mouseY;

  if(atouching(z,g))
  {
    z.shapeColor="black";
    g.shapeColor="black";
  }
  else{
    z.shapeColor="red";
    g.shapeColor="red";
  }
BounceOff(h,y)
  drawSprites();
}
function atouching(object1,object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2)
  {
    return true;
  }
  else{
      return false;
  }
}
function BounceOff(object,object1)
{
  if(object.x - object1.x < object1.width/2 + object.width/2
    && object1.x - object.x < object1.width/2 + object.width/2)
  {
      object.velocityX=(-1)*object.velocityX;
  }
  else if(object.y - object1.y < object1.height/2 + object.height/2
    && object1.y - object.y < object1.height/2 + object.height/2)
    {
      object.velocityY=(-1)*object.velocityY;
    }
}
