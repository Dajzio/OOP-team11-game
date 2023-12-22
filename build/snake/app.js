import Snake from './Snake.js';
import { GameLoop } from './GameLoop.js';
const snake = new Snake(document.getElementById('game'));
const gameLoop = new GameLoop(snake);
window.addEventListener('load', () => {
    gameLoop.start();
});
//# sourceMappingURL=app.js.map