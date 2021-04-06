var movingrectagle, fixedrectangle;



function setup() {
  createCanvas(800,400);
  movingrectangle = createSprite(400, 200, 50, 50);
  movingrectangle.shapeColor = "green";
  fixedrectangle = createSprite(200,200,50,50);
  fixedrectangle.shapeColor= "green";
}

function draw() {
  background("black");  
  movingrectangle.x = mouseX;
  movingrectangle.y = mouseY;

  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
     fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
     fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
     movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
    movingrectangle.shapeColor = "red";
    fixedrectangle.shapeColor =  "red";

  }
  else{
    movingrectangle.shapeColor = "green";
    fixedrectangle.shapeColor = "green";
  }


  drawSprites();

}