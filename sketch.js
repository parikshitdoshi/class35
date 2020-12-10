var hypnoticBall, database;
var position;

var player, form, game;
var gameState = 0;
var playerCount;


function setup(){
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
 
  
}

