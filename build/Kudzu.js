import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';
export default class Kudzu extends ScoreItem {
    maxX;
    maxY;
    speedX;
    speedY;
    constructor(maxX, maxY) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/kudzu.png');
        this.scoreModifier = 5;
        this.maxX = maxX;
        this.maxY = maxY;
        this.posX = Math.random() * this.maxX;
        this.posY = Math.random() * this.maxY;
        this.speedX = (Math.random() * 2 + 1) * Math.floor(Math.random() * 2 - 1);
        this.speedY = Math.random() * 2 + 1 * Math.floor(Math.random() * 2 - 1);
    }
    update(elapsed) {
        this.posX += this.speedX;
        this.posY -= this.speedY;
    }
}
//# sourceMappingURL=Kudzu.js.map