const inquirer = require("inquirer");
const { exit } = require("process");
const msg = require("../helpers/Text");
const Player = require("./Players");

const player = new Player();

const Questions = (console) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "",
        choices: [
          "Add Player",
          "Remove Player",
          "Give Points",
          "Remove Points",
          "View Scores",
          "Exit",
        ],
      },
      {
        type: "input",
        name: "namePlayer",
        message: "Name player",
        when(answers) {
          return answers.action == "Add Player";
        },
      },
      {
        type: "list",
        name: "givePlayer",
        message: "Give Points",
        choices: player.viewPlayers(),
        when(answers) {
          return answers.action == "Give Points";
        },
      },
      {
        type: "list",
        name: "removePoints",
        message: "Remove Points",
        choices: player.viewPlayers(),
        when(answers) {
          return answers.action == "Remove Points";
        },
      },
      {
        type: "list",
        name: "removePlayer",
        message: "Remove Player",
        choices: player.viewPlayers(),
        when(answers) {
          return answers.action == "Remove Player";
        },
      }
    ])
    .then((answers) => {

      switch(answers.action){
        case "Add Player":
          player.addPlayer(answers.namePlayer);
          break
        case "Remove Player":
          player.removePlayer(answers.removePlayer);
          break
        case "Give Points":
          player.givePoints(answers.givePlayer);
          break
        case "Remove Points":
          player.givePoints(answers.removePoints, "remove");
          break
        case "View Scores":
          player.viewPoints();
          break;
        case "Salir":
          return exit;
        default:
          msg.Warn("Something went wrong");
      }
      Questions();
    });
};

module.exports = Questions;
