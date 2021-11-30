const msg = require("../helpers/Text");

class Player {
  constructor() {
    this.players = [];
    this.points = [];

    if (typeof Player.instance === "object") {
      return Player.instance;
    }

    Player.instance = this;
    return this;
  }

  addPlayer(name) {
    if (this.players.length == 0) {
      msg.Ok(`${name} has been added`);
      return this.players.push({ name: name.toLowerCase(), points: 0 });
    }

    this.players.forEach((element) => {
      if (element.name == name.toLowerCase()) {
        msg.Warn("Player already exists");
      } else {
        msg.Ok(`${name} has been added`);
        this.players.push({ name: name.toLowerCase(), points: 0 });
      }
    });
  }

  viewPlayers() {
    if (this.players.length > 0) {
      return this.players;
    } else {
      return ["No players"];
    }
  }
  removePlayer(name) {
    this.players.forEach((element, index) => {
      if (element.name == name) {
        this.players.splice(index, 1);
      }
    });
  }

  givePoints(name, remove = "give") {
    this.players.forEach((element, index) => {
      if (element.name == name) {
        remove == "remove"
          ? this.players[index].points--
          : this.players[index].points++;
        msg.Ok(`${name} has ${this.players[index].points} points`);
      }
    });
  }
  viewPoints(){
    msg.ScoreTittle("Score")
    let arr =  this.players.sort((a, b) => b.points - a.points);
    arr.forEach((element, index) => {
      msg.Score(`${element.name} has ${element.points} points`);
    })
  }
}

module.exports = Player;
