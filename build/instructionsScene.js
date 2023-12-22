import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class InstructionsScene extends Scene {
    starting;
    logo;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.logo = CanvasUtil.loadNewImage('./assets/instructions.png');
    }
    processInput(mouseListener, keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_S))
            this.starting = true;
    }
    update(elapsed) {
        if (this.starting)
            return new Level(this.maxX, this.maxY);
        return null;
    }
    render(canvas) {
        CanvasUtil.fillCanvas(canvas, 'black');
        CanvasUtil.drawImage(canvas, this.logo, (canvas.width - this.logo.width) / 2, (canvas.height - this.logo.height) / 2);
        CanvasUtil.writeTextToCanvas(canvas, 'Press [S] to start', canvas.width / 2, canvas.height / 8, 'center', 'serif', 48, 'white');
    }
}
//# sourceMappingURL=instructionsScene.js.map