import Drawable from './Drawable.js';
export default class ScoreItem extends Drawable {
    score;
    speed;
    getScore() {
        return this.score;
    }
    update(elapsed) {
        this.posY += elapsed * this.speed;
    }
}
//# sourceMappingURL=ScoreItem.js.map