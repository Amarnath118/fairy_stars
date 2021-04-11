var starImg,bgImg;
var star, starBody;
var fairy,fairy1,sound1,fairy2;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy1=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairy2=loadImage("images/fairy.png")
	//load animation for fairy here
sound1=loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    fairy=createSprite(100,450,20,20);
	fairy.addAnimation("fairy1",fairy1);
    fairy.scale=0.25;
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.y>470 && starBody.position.y>470){
	Matter.Body.setStatic(starBody,true);
}

	keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		fairy.addAnimation("fairymoving",fairy2);
		fairy.changeAnimation("fairymoving");
	}

	//writw code to move fairy left and right
	
if (keyCode===LEFT_ARROW){
	fairy.x=fairy.x-2;
}
if (keyCode===RIGHT_ARROW){
	fairy.x=fairy.x+2;
}
}
