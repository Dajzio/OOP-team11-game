import KeyListener from './KeyListener.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import Fruit from './Fruit.js';
import Body from './Body.js';
import Power from './Power.js';
import Scene from '../Scene.js';
export default class Snake extends Scene {
    canvas;
    player;
    keyListener;
    scoreItems = [];
    score = 0;
    body = [];
    timeToNextItem = 0;
    fruit = [];
    power;
    logo;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.player = new Player(maxX, maxY);
        this.keyListener = new KeyListener();
        this.scoreItems = [];
        this.score = 0;
        this.scoreItems.push(new Fruit(maxX, maxY));
        this.logo = CanvasUtil.loadNewImage('./assets/grass.jpg');
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
        if (this.player.getPosX() < 0 || this.player.getPosX() > this.maxX
            || this.player.getPosY() < 0 || this.player.getPosY() > this.maxY) {
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
                    this.scoreItems.push(new Fruit(this.maxX + 100, this.maxY + 100));
                }
                else {
                    this.scoreItems.push(new Power(this.maxX + 100, this.maxY + 100));
                }
            }
            return true;
        });
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        console.log(canvas.width, canvas.height, this.logo.width, this.logo.height);
        CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
        this.player.render(canvas);
        console.log(this.scoreItems);
        this.scoreItems.forEach((scoreItem) => scoreItem.render(canvas));
        CanvasUtil.writeTextToCanvas(canvas, `Score: ${this.score}`, 10, 30, 'left', 'Comic Sans MS', 40, 'white');
        if (this.player.getPosX() < 0 || this.player.getPosX() > canvas.width
            || this.player.getPosY() < 0 || this.player.getPosY() > canvas.height) {
            CanvasUtil.writeTextToCanvas(canvas, 'Game Over', canvas.width / 2, canvas.height / 2, 'center', 'Comic Sans MS', 60, 'white');
        }
        this.scoreItems.forEach((scoreItem) => {
            if (this.player.collidesWithItem(scoreItem)) {
                if (scoreItem instanceof Body) {
                    CanvasUtil.writeTextToCanvas(canvas, 'Game Over', canvas.width / 2, canvas.height / 2, 'center', 'Comic Sans MS', 60, 'white');
                }
            }
        });
    }
}
//# sourceMappingURL=Snake.js.map