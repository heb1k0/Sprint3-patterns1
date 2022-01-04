const Player  = require("./controllers/Player");
const ScoreBoard = require("./controllers/Score");

let Alex = new Player("Alex");
let Juan = new Player("Juan");
let Pedro = new Player("Pedro");


let Score = new ScoreBoard();

Score.addPlayer(Alex, Juan, Pedro)
Score.givePoints("Alex")
Score.removePoints("Pedro")
Score.removePlayer("Juan")
Score.viewPlayers()
