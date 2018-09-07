import { Component } from '@angular/core';
import { Coord } from '../common/coord';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  sixtyFour = new Array(64).fill(0).map((_, i) => i);
  knightPosition$;

  constructor(private gameService: GameService) {
    this.knightPosition$ = this.gameService.knightPosition$;
  }

  xy(i): Coord {
    return {
      x: i % 8,
      y: Math.floor(i / 8)
    }
  }

  isBlack({ x, y }: Coord) {
    return (x + y) % 2 === 1;
  }

  handleSquareClick(pos: Coord) {
    if (this.gameService.canMoveKnight(pos)) {
      this.gameService.moveKnight(pos);
    }
  }

}
