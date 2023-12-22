import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
export default class PlayerSnake extends Player {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.speed = 3;
        this.posX = maxX / 2;
        this.posY = maxY / 2;
        this.image = CanvasUtil.loadNewImage('./assets/head.png');
    }
    move(direction) {
        const snakeArray = ['./assets/head.png', './assets/head-back.png', './assets/head-up.png', './assets/head-down.png', './assets/vertical.png'];
        if (direction === 1 && this.posY > 0) {
            this.posY -= this.speed;
            this.image = CanvasUtil.loadNewImage(snakeArray[2]);
        }
        else if (direction === 2 && this.posX < 2300) {
            this.posX += this.speed;
            this.image = CanvasUtil.loadNewImage(snakeArray[0]);
        }
        else if (direction === 3 && this.posY < 1110) {
            this.posY += this.speed;
            this.image = CanvasUtil.loadNewImage(snakeArray[3]);
        }
        else if (direction === 4 && this.posX > 0) {
            this.posX -= this.speed;
            this.image = CanvasUtil.loadNewImage(snakeArray[1]);
        }
    }
    collidesWithItem(item) {
        if (this.posX > item.getPosX() && this.posX < item.getPosX() + item.getWidth()
            && this.posY > item.getPosY() && this.posY < item.getPosY() + item.getHeight())
            return true;
        return false;
    }
}
//# sourceMappingURL=PlayerSnake.js.map