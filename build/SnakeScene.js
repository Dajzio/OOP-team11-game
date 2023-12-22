import KeyListener from './KeyListener.js';
import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import PlayerSnake from './PlayerSnake.js';
export default class SnakeScene extends Scene {
    canvas;
    player;
    keyListener;
    scoreItems = [];
    score = 0;
    timeToNextItem = 0;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.player = new PlayerSnake(maxX, maxY);
        this.keyListener = new KeyListener();
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
            this.player.move(1);
            this.player.getImage();
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.player.move(2);
            this.player.getImage();
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
            this.player.move(3);
            this.player.getImage();
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
            this.player.move(4);
            this.player.getImage();
        }
    }
    update(elapsed) {
        this.timeToNextItem -= elapsed;
        if (this.player.getPosX() < 0 || this.player.getPosX() > this.canvas.width
            || this.player.getPosY() < 0 || this.player.getPosY() > this.canvas.height) {
            return null;
        }
        return null;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.player.render(this.canvas);
        const ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(this.player.getPosX(), this.player.getPosY());
        ctx.lineTo(this.player.getPosX() + 10, this.player.getPosY() + 10);
        ctx.stroke();
    }
}
//# sourceMappingURL=SnakeScene.js.map