import { Game } from "./game.js";

const GAME_WIDTH = 768;
const GAME_HEIGHT = 768;

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const game = new Game(GAME_WIDTH, GAME_HEIGHT);
  game.render(ctx);
});
