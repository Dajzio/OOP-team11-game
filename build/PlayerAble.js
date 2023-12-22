import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
export default class PlayerAble extends Player {
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.posX = maxX / 2;
        this.posY = maxY / 2;
        this.image = CanvasUtil.loadNewImage('./assets/playerMap.png');
    }
}
//# sourceMappingURL=PlayerAble.js.map