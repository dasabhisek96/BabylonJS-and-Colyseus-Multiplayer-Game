import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import * as BABYLON from '@babylonjs/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private scene: BABYLON.Scene;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.initializeGame();
    this.gameService.connectToGame();
  }

  initializeGame() {
    const canvas = document.getElementById('renderCanvas') as unknown as HTMLCanvasElement;
    const engine = new BABYLON.Engine(canvas, true);
    this.scene = new BABYLON.Scene(engine);

    // Create a basic camera and light
    const camera = new BABYLON.ArcRotateCamera('camera', 0, Math.PI / 4, 10, BABYLON.Vector3.Zero(), this.scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this.scene);

    // Create ground
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, this.scene);

    // Game loop
    engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createShape() {
    const shape = BABYLON.MeshBuilder.CreateBox('box', { size: 1 }, this.scene);
    this.gameService.createShape({
      shape: 'box',
      position: shape.position
    });
  }

  moveShape() {
    // Assume logic to move shape and update position
    const newPosition = new BABYLON.Vector3(1, 0, 0);
    this.gameService.moveShape({
      position: newPosition
    });
  }
}
