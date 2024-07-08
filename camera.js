export class Camera {
  constructor(map, width, height) {
    this.map = map;
    this.with = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }
  move(speedX, speedY) {
    this.x += speedX;
    this.y += speedY;
  }
}
