import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Player extends Drawable {
    speed;
    constructor(maxX, maxY) {
        super();
        this.speed = 5;
        this.posX = maxX / 2;
        this.posY = maxY / 2;
        this.image = CanvasUtil.loadNewImage('./assets/playerMap.png');
    }
    move(direction) {
        if (direction === 1)
            this.posY -= this.speed;
        else if (direction === 2)
            this.posX += this.speed;
        else if (direction === 3)
            this.posY += this.speed;
        else if (direction === 4)
            this.posX -= this.speed;
    }
    getImage() {
        return this.image;
    }
    setPositionX(posX) {
        this.posX = posX;
    }
    setPositionY(posY) {
        this.posY = posY;
    }
}
//# sourceMappingURL=Player.js.map