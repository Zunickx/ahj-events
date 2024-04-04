/* eslint-disable linebreak-style */
import GamePlay from './GamePlay';
import GameController from './GameController';

const gamePlay = new GamePlay();
const gameCtrl = new GameController(gamePlay);

gameCtrl.init();
