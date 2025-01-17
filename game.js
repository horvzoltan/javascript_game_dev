import { Map } from "./map.js";
import { Camera } from "./camera.js";

export class Game {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
    this.map = new Map(document.getElementById("full_map"));
    this.camera = new Camera(this.map, this.GAME_WIDTH, this.GAME_HEIGHT);
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (this.keys.indexOf(e.key) === -1) {
        this.keys.unshift(e.key);
      }
      console.log(this.keys);
    });

    window.addEventListener("keyup", (e) => {
      const index = this.keys.indexOf(e.key);
      if (index > -1) {
        this.keys.splice(index, 1);
      }
      console.log(this.keys);
    });
  }
  update() {
    let speedX = 0;
    let speedY = 0;
    if (this.keys[0] === "ArrowLeft") {
      speedX = -1;
    } else if (this.keys[0] === "ArrowRight") {
      speedX = 1;
    } else if (this.keys[0] === "ArrowUp") {
      speedY = -1;
    } else if (this.keys[0] === "ArrowDown") {
      speedY = 1;
    }
    this.camera.move(speedX, speedY);
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
