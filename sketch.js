var tom,bgImage
var tomImg1,tomImg2,tomImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
        bgImage= loadImage("Images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
     tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
     tomImg3= loadAnimation("images/cat4.png");

     mouseImg1= loadImage("Images/mouse1.png");
     mouseImg2=loadImage("Images/mouse2.png,Images/ouse3.png");
     mouseImg3=loadImage("Images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites her
    tom=createSprite(400, 200, 50,50);
	tom.addImage(cat1.png)
	tom.scale=0.2
     
    mouse=createSprite(500,100,50,50);
    mouse.addImage(mouse1.png)
    mouse.scale=0.2 
    
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        tom.velocityX=0
        tom.addAnimation("catstanding",catImg4);
        tom.changeAnimation("catstandind");
    }


       drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW)
  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay = 25;

  tom.addAnimation("catRunning",catimg2)
  tom.changeAnimatiom("catRunning");
}
