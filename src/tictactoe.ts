import Board from "./board";
import Coordinate from "./coordinate";
import { Mark } from "./mark";

class Tictactoe {
    private board: Board;
    private currentPlayer: Mark;

    constructor(board: Board) {
        this.currentPlayer = Mark.X;
        this.board = board;
    }

    public play(coordinate: Coordinate): void {
        this.board.placeMark(this.currentPlayer, coordinate);
        this.currentPlayer = this.getNextPlayer();
    }

    public winner(): Mark {
        if (this.board.threeInARow(Mark.X)) {
            return Mark.X;
        }

        if (this.board.threeInARow(Mark.O)) {
            return Mark.O;
        }

        return null;
    }

    public isDraw(): boolean {
        return this.winner() === null && this.board.isFull();
    }

    public whoIsCurrentPlayer(): Mark {
        return this.currentPlayer;
    }

    private getNextPlayer(): Mark {
        return this.currentPlayer === Mark.X ? Mark.O : Mark.X;
    }
}

export default Tictactoe;
