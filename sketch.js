var  database;
var form,gameState,playerCount
var allPlayers
var car1,car2,car3,car4,cars
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);
  form=new Form()
  form.display()
game=new Game()
game.getState()
player=new Player()
player.getCount()
 car1=createSprite(200,400)
 car2=createSprite(400,400)
 car3=createSprite(600,400)
 car4=createSprite(800,400)
 cars=[car1,car2,car3,car4]
}
function draw(){

  if(playerCount===4&&gameState==0){
    gameState=1
  }
  if(gameState===1){
    game.play()
  }
}
