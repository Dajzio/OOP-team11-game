/* eslint-disable jsdoc/require-param-description */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import CanvasUtil from './CanvasUtil.js';
import NPC from './NPC.js';
import PlayerMap from './PlayerMap.js';
import QuestionScene from './QuestionScene.js';
import MouseListener from './MouseListener.js';
import Carpet from './Carpet.js';
import VictoryScene from './VictoryScene.js';
import CoinEarner from './CoinEarner.js';

export default class Level extends Scene {
  private player: PlayerMap;

  private startingQuestion: boolean;

  private startingVictory: boolean;

  private carpetGameArray: Carpet[] = [new Carpet(this.maxX, this.maxY, 1), new Carpet(this.maxX, this.maxY, 2)];

  private carpetWinArray: Carpet[] = [new Carpet(this.maxX, this.maxY, 3)];

  private npcArray: NPC[] = [new NPC(this.maxX, this.maxY, 1), new NPC(this.maxX, this.maxY, 2), new NPC(this.maxX, this.maxY, 3), new NPC(this.maxX, this.maxY, 4)];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new PlayerMap(maxX, maxY);
    this.startingQuestion = false;
    this.startingVictory = false;
  }

  /**
   *
   * @param mouseListener yes
   * @param keyListener yes
   */
  public processInput(mouseListener: MouseListener, keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(1);
    if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(2);
    if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(3);
    if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(4);
    if (keyListener.isKeyDown(KeyListener.KEY_F)) {
      this.npcArray.forEach((npc: NPC) => {
        if (this.player.isCollidingNPC(npc)) {
          this.startingQuestion = true;
        }
        return null;
      });
      if (CoinEarner.score >= 1) {
        this.carpetWinArray.forEach((carpet: Carpet) => {
          if (this.player.isCollidingCarpet(carpet)) {
            this.startingVictory = true;
          }
          return null;
        });
      }
    }
    // left up lockers top line
    if (this.player.getPosY() > 170.5) {
      if (this.player.getPosX() < 709) {
        if (this.player.getPosY() < 180) {
          if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(1);
        }
      }
    }
    // left up lockers side line
    if (this.player.getPosX() < 709) {
      if (this.player.getPosX() > 690) {
        if (this.player.getPosY() > 170.5) {
          if (this.player.getPosY() < 385.5) {
            if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(2);
          }
        }
      }
    }
    // left up lockers bottom line
    if (this.player.getPosY() < 385.5) {
      if (this.player.getPosY() > 370.5) {
        if (this.player.getPosX() < 709) {
          if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(3);
        }
      }
    }
    // right up lockers top line
    if (this.player.getPosY() > 170.5) {
      if (this.player.getPosX() > 1038) {
        if (this.player.getPosY() < 180) {
          if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(1);
        }
      }
    }
    // right up lockers side line
    if (this.player.getPosX() > 1050) {
      if (this.player.getPosX() < 1060) {
        if (this.player.getPosY() > 170.5) {
          if (this.player.getPosY() < 385.5) {
            if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(4);
          }
        }
      }
    }
    // right up lockers bottom line
    if (this.player.getPosY() < 385.5) {
      if (this.player.getPosY() > 370.5) {
        if (this.player.getPosX() > 1038) {
          if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(3);
        }
      }
    }
    // left down lockers top line
    if (this.player.getPosY() > 472) {
      if (this.player.getPosX() < 709) {
        if (this.player.getPosY() < 490) {
          if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(1);
        }
      }
    }
    // left down lockers side line
    if (this.player.getPosX() < 709) {
      if (this.player.getPosX() > 690) {
        if (this.player.getPosY() > 472) {
          if (this.player.getPosY() < 680.5) {
            if (keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(2);
          }
        }
      }
    }
    // left down lockers bottom line
    if (this.player.getPosY() < 690.5) {
      if (this.player.getPosY() > 680.5) {
        if (this.player.getPosX() < 709) {
          if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(3);
        }
      }
    }
    // right down lockers top line
    if (this.player.getPosY() > 472) {
      if (this.player.getPosX() > 1038) {
        if (this.player.getPosY() < 479) {
          if (keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.move(1);
        }
      }
    }
    // right down lockers side line
    if (this.player.getPosX() > 1050) {
      if (this.player.getPosX() < 1060) {
        if (this.player.getPosY() > 472) {
          if (this.player.getPosY() < 690.5) {
            if (keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(4);
          }
        }
      }
    }
    // right down lockers bottom line
    if (this.player.getPosY() < 690.5) {
      if (this.player.getPosY() > 600.5) {
        if (this.player.getPosX() > 1038) {
          if (keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.move(3);
        }
      }
    }
  }

  /**
   *
   * @param elapsed comment
   * @returns yes
   */
  public update(elapsed: number): Scene {
    if (this.player.getPosX() < 19) {
      this.player.setPositionX(20);
    }
    if (this.player.getPosX() > 1820) {
      this.player.setPositionX(1819);
    }
    if (this.player.getPosY() < 10) {
      this.player.setPositionY(11);
    }
    if (this.player.getPosY() > 790) {
      this.player.setPositionY(789);
    }

    if (this.startingQuestion) return new QuestionScene(this.maxX, this.maxY);
    if (this.startingVictory) return new VictoryScene(this.maxX, this.maxY);
    return null;
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    this.npcArray.forEach((npc: NPC) => {
      npc.render(canvas);
    });
    this.carpetWinArray.forEach((carpet: Carpet) => {
      carpet.render(canvas);
    });
    this.carpetGameArray.forEach((carpet: Carpet) => {
      carpet.render(canvas);
    });
    this.player.render(canvas);
    CanvasUtil.writeTextToCanvas(canvas, `Score: ${CoinEarner.score}`, 100, 40, 'center', 'serif', 40, 'red');
  }
}
