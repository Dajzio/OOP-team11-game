import KeyListener from './KeyListener.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import { Game } from './GameLoop.js';
import Fruit from './Fruit.js';
import Body from './Body.js';
import Power from './Power.js';
export default class Snake extends Game {
    canvas;
    player;
    keyListener;
    scoreItems = [];
    score = 0;
    body = [];
    timeToNextItem = 0;
    fruit = [];
    power;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.player = new Player(this.canvas.width, this.canvas.height);
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.scoreItems = [];
        this.score = 0;
        this.scoreItems.push(new Fruit(this.canvas.width, this.canvas.height));
        this.scoreItems.push(new Power(this.canvas.width, this.canvas.height));
        this.body = [];
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
            this.player.move(1);
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.player.move(2);
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
            this.player.move(3);
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
            this.player.move(4);
        }
    }
    update(elapsed) {
        this.timeToNextItem -= elapsed;
        if (this.player.getPosX() < 0 || this.player.getPosX() > this.canvas.width
            || this.player.getPosY() < 0 || this.player.getPosY() > this.canvas.height) {
            return null;
        }
        if (this.player.isMoving(1)) {
            console.log(this.player.isMoving(1));
        }
        this.scoreItems.forEach((scoreItem, index) => {
            if (this.player.collidesWithItem(scoreItem)) {
                if (scoreItem instanceof Fruit) {
                    this.score += scoreItem.getScore();
                    this.scoreItems.splice(index, 1);
                    this.player.body.push(new Body(this.player.getPosX() - 56 * this.player.body.length, this.player.getPosY()));
                }
                else if (scoreItem instanceof Power) {
                    this.player.speeedup();
                    this.scoreItems.splice(index, 1);
                }
                const chance = Math.random();
                if (chance < 0.8) {
                    this.scoreItems.push(new Fruit(this.canvas.width, this.canvas.height));
                }
                else {
                    this.scoreItems.push(new Power(this.canvas.width, this.canvas.height));
                }
            }
            return true;
        });
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.player.render(this.canvas);
        this.scoreItems.forEach((scoreItem) => scoreItem.render(this.canvas));
        this.player.body.forEach((body) => body.render(this.canvas));
        CanvasUtil.writeTextToCanvas(this.canvas, `Score: ${this.score}`, 10, 30, 'left', 'Comic Sans MS', 40, 'white');
        if (this.player.getPosX() < 0 || this.player.getPosX() > this.canvas.width
            || this.player.getPosY() < 0 || this.player.getPosY() > this.canvas.height) {
            CanvasUtil.writeTextToCanvas(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Comic Sans MS', 60, 'white');
        }
        this.scoreItems.forEach((scoreItem) => {
            if (this.player.collidesWithItem(scoreItem)) {
                if (scoreItem instanceof Body) {
                    CanvasUtil.writeTextToCanvas(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Comic Sans MS', 60, 'white');
                }
            }
        });
    }
}
//# sourceMappingURL=Snake.js.map