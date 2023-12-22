import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Player extends Drawable {
    constructor(startX, startY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/player.png');
        this.posX = startX;
        this.posY = startY;
    }
    move(newX) {
        if (newX === 165)
            this.posX = 165;
        else if (newX === 285)
            this.posX = 285;
        else if (newX === 410)
            this.posX = 410;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    collideWithItem(item) {
        if (item.getPosX() + item.getWidth() > this.posX
            && item.getPosX() < this.posX + this.image.width
            && item.getPosY() + item.getHeight() > this.posY
            && item.getPosY() < this.posY + this.image.height)
            return true;
        return false;
    }
}
//# sourceMappingURL=Player.js.map