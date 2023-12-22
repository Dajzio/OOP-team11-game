import CanvasUtil from './CanvasUtil.js';
import Car from './Car.js';
import Coin from './Coin.js';
import { Game } from './GameLoop.js';
import Ice from './Ice.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
export default class DareDriver extends Game {
    canvas;
    keyListener;
    player;
    scoreItems = [];
    laneLeft;
    laneCenter;
    laneRight;
    timeToNextItem;
    timeLeft;
    score;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = 600;
        this.keyListener = new KeyListener();
        this.player = new Player(285, this.canvas.height - 100);
        this.laneLeft = 165;
        this.laneCenter = 285;
        this.laneRight = 410;
        this.timeToNextItem = Math.random() * 120 + 300;
        this.timeLeft = 72000;
        this.score = 0;
    }
    processInput() {
        if (this.keyListener.keyPressed(KeyListener.KEY_LEFT)) {
            if (this.player.getPosX() === this.laneRight)
                this.player.move(this.laneCenter);
            else if (this.player.getPosX() === this.laneCenter)
                this.player.move(this.laneLeft);
        }
        if (this.keyListener.keyPressed(KeyListener.KEY_RIGHT)) {
            if (this.player.getPosX() === this.laneLeft)
                this.player.move(this.laneCenter);
            else if (this.player.getPosX() === this.laneCenter)
                this.player.move(this.laneRight);
        }
    }
    update(elapsed) {
        this.timeLeft -= elapsed;
        if (this.timeLeft > 0) {
            this.timeToNextItem -= elapsed;
            this.scoreItems.forEach((scoreItem) => {
                scoreItem.update(elapsed);
            });
            if (this.timeToNextItem < 0) {
                const mathRandomed = Math.random();
                let posX;
                if (mathRandomed < 0.33)
                    posX = this.laneLeft;
                else if (mathRandomed > 0.66)
                    posX = this.laneRight;
                else
                    posX = this.laneCenter;
                if (Math.random() < 0.65)
                    this.scoreItems.push(new Car(posX));
                else
                    this.scoreItems.push(new Coin(posX));
                if (Math.random() > 0.95)
                    this.scoreItems.push(new Ice(posX));
                this.timeToNextItem = Math.random() * 120 + 300;
            }
            this.scoreItems = this.scoreItems.filter((scoreItem) => {
                if (this.player.collideWithItem(scoreItem)) {
                    this.score += scoreItem.getScore();
                    if (scoreItem instanceof Ice) {
                        let mathRandomed;
                        let posX;
                        do {
                            mathRandomed = Math.random();
                            if (mathRandomed < 0.33)
                                posX = this.laneLeft;
                            else if (mathRandomed > 0.66)
                                posX = this.laneRight;
                            else
                                posX = this.laneCenter;
                        } while (posX === this.player.getPosX());
                        this.player.setPosX(posX);
                    }
                    return false;
                }
                if (scoreItem.getPosY() > this.canvas.height)
                    return false;
                return true;
            });
            return true;
        }
        return false;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        if (this.timeLeft > 0) {
            CanvasUtil.writeTextToCanvas(this.canvas, `Score: ${this.score}`, 0, 20, 'left', 'Arial', 24, 'lightblue');
            CanvasUtil.writeTextToCanvas(this.canvas, `Time left: ${Math.floor(this.timeLeft / 1200)}`, 0, 50, 'left', 'Arial', 24, 'lightblue');
            this.scoreItems.forEach((scoreItem) => {
                scoreItem.render(this.canvas);
            });
            this.player.render(this.canvas);
        }
        else
            CanvasUtil.writeTextToCanvas(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 36, 'white');
    }
}
//# sourceMappingURL=DareDriver.js.map