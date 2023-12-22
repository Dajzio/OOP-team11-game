import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
export default class PlayerMap extends Player {
    score;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.posX = maxX / 2;
        this.posY = maxY / 2;
        this.image = CanvasUtil.loadNewImage('./assets/PlayerMap.png');
    }
    isCollidingNPC(nPC) {
        if (nPC.getPosX() + nPC.getWidth() > this.posX
            && nPC.getPosX() < this.posX + this.image.width
            && nPC.getPosY() + nPC.getHeight() > this.posY
            && nPC.getPosY() < this.posY + this.image.height)
            return true;
        return false;
    }
    isCollidingCarpet(carpet) {
        if (carpet.getPosX() + carpet.getWidth() > this.posX
            && carpet.getPosX() < this.posX + this.image.width
            && carpet.getPosY() + carpet.getHeight() > this.posY
            && carpet.getPosY() < this.posY + this.image.height)
            return true;
        return false;
    }
}
//# sourceMappingURL=PlayerMap.js.map