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
        CanvasUtil.writeTextToCanvas(canvas, 'You need to talk with NPC', 1300, 400, 'center', 'serif', 24, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'and then you can go to one of', 1300, 450, 'center', 'serif', 24, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'the doors to play game!', 1300, 500, 'center', 'serif', 24, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'Have fun!', 1300, 5500, 'center', 'serif', 24, 'white');
        CanvasUtil.writeTextToCanvas(canvas, '*Watch out* This game is addictive', 1300, 600, 'center', 'serif', 24, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'If your score is more than 2', 1300, 650, 'center', 'serif', 24, 'white');
        CanvasUtil.writeTextToCanvas(canvas, 'go to red carpet and press F', 1300, 700, 'center', 'serif', 24, 'white');
    }
}
//# sourceMappingURL=InstructionScene.js.map