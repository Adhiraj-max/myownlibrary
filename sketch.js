var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(300,200,50,50)
 fixedrect.shapeColor = "green"
 movingrect.shapeColor = "green"

  
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"

  }
  else {
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }

    

  drawSprites();
}
function isTouching (object1,object2) {
  if(object1.x -object2.x < object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y < object1.height/2+object2.height/2 &&
    object2.y-object1.y <  object1.height/2+object2.height/2)
    { return true
  }
else{
  return false
}
}
