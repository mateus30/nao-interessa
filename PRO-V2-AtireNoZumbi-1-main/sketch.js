var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zumbiImg;
var zumbi;


var zumbiGrupo;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zumbiImg=loadImage("assets/zombie.png");

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//criando o sprite do jogador
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

zumbiGrupo=new Group();
}

function draw() {
background(0); 

console.log(player.y);

CriarZumbi();


  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(player.y>320 && keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-15
}
if(player.y<height-50 && keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+15
}



//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}



drawSprites();

}


function CriarZumbi(){
  if (frameCount%30===0){
    zumbi = createSprite(width,random(300,height-50))
    zumbi.velocityX=random(-3,-6);
    zumbi.velocityY=random(-1,1);
    zumbi.addImage(zumbiImg);
    zumbi.scale=random(0.1,0.165);
    zumbi.lifetime= 450;
    if (zumbi.isTouching(parede)){
      zumbi.velocityY = 1;
    }
    zumbiGrupo.add(zumbi);
  }
}
