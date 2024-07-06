import { Map } from "./map.js";
import { Camera } from "./camera.js";

export class Game {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.map = new Map(document.getElementById("full_map"));
    this.camera = new Camera(this.map, this.GAME_WIDTH, this.GAME_HEIGHT);
    this.key = [];
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      console.log(this.keys);
    });
  }
  render(ctx) {
    ctx.drawImage(
      this.map.image,
      this.camera.x,
      this.camera.y,
      this.GAME_WIDTH,
      this.GAME_HEIGHT,
      0,
      0,
      this.GAME_WIDTH,
      this.GAME_HEIGHT
    );
  }
}
