var z,g;
function setup() {
  createCanvas(800,400);
  z=createSprite(400, 200, 50, 50);
  g=createSprite(200,200,20,20)
  z.debug=true;
  g.debug=true;
  z.shapeColor="red"
  g.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  z.x=World.mouseX;
  z.y=World.mouseY;

  if(z.x-g.x<g.width/2+z.width/2&&
    g.x-z.x>g.width/2+z.width/2)
  {
    z.shapeColor="black";
    g.shapeColor="black";
  }
  else{
    z.shapeColor="red";
    g.shapeColor="red";
  }
  drawSprites();
}


