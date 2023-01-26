import React from "react";
import { PlayGame } from "./scenes/PlayGame";
import styles from "./styles.m.scss";

import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0xccfbf1,
  scene: [PlayGame],
};

const game = new Phaser.Game(config);

export const App = () => {
  return <h1 className={styles.heading}>Hello world!</h1>;
};
