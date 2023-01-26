import Phaser from "phaser";
import logoImg from "../assets/logo.webp";

export class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }

  preload() {
    this.load.image("logo", logoImg);
  }

  create() {
    this.add.image(200, 200, "logo").setOrigin(0, 0);
  }
}
