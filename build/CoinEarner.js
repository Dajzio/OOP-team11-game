import { Game } from './GameLoop.js';
import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import SceneStart from './SceneStart.js';
import MouseListener from './MouseListener.js';
export default class CoinEarner extends Game {
    canvas;
    keyListener;
    mouseListener;
    currentScene;
    static score;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.mouseListener = new MouseListener(canvas);
        this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
        CoinEarner.score = 0;
    }
    processInput() {
        this.currentScene.processInput(this.mouseListener, this.keyListener);
    }
    update(elapsed) {
        const nextScene = this.currentScene.update(elapsed);
        if (nextScene !== null)
            this.currentScene = nextScene;
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
//# sourceMappingURL=CoinEarner.js.map