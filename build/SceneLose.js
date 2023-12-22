import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
import SceneStart from './SceneStart.js';
export default class SceneLose extends Scene {
    continue;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.continue = false;
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE))
            this.continue = true;
    }
    update(elapsed) {
        if (this.continue)
            return new SceneStart(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.writeTextToCanvas(canvas, 'hej!', canvas.width / 2, canvas.height / 2, 'center', 'serif', 48, 'red');
    }
}
//# sourceMappingURL=SceneLose.js.map