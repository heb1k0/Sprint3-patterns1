class ScoreBoard {
  constructor() {
    if (typeof ScoreBoard.instance === "object") {
      return ScoreBoard.instance;
    }
    this.players = [];
    ScoreBoard.instance = this;
    return this;
  }

  addPlayer(...arr) {
    arr.forEach((player) => {
      this.players.push({ name: player.player, score: 0 });
    });
  }
  removePlayer(name) {
    this.players.forEach((player, index) => {
      if (player.name === name) {
        this.players.splice(index, 1);
      }
    });
  }
  givePoints(name) {
    this.players.forEach((player) => {
      if (player.name === name) {
        player.score += 1;
      }
    });
  }
  removePoints(name) {
    this.players.forEach((player) => {
      if (player.name === name) {
        player.score -= 1;
      }
    });
  }
  getScore(name) {
    this.players.forEach((player) => {
      if (player.name === name) {
        return player.score;
      }
    });
  }
  viewPlayers() {
    this.players.forEach((player) => {
        console.log(`Player : ${player.name} ---> Score: ${player.score}`);
    })
  }
}

module.exports = ScoreBoard;
