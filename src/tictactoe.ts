import Board from "./board";
import Coordinate from "./coordinate";
import Mark from "./mark";
import PlayerMark from "./player-mark";

class Tictactoe {
    private board: Board;
    private currentPlayer: PlayerMark;

    constructor(board: Board) {
        this.currentPlayer = PlayerMark.X();
        this.board = board;
    }

    public play(coordinate: Coordinate): void {
        this.board.placeMark(this.currentPlayer, coordinate);
        this.currentPlayer = this.getNextPlayer();
    }

    public winner(): PlayerMark {
        const playerX = PlayerMark.X();
        const playerO = PlayerMark.O();

        if (this.board.threeInARow(playerX)) {
            return playerX;
        }

        if (this.board.threeInARow(playerO)) {
            return playerO;
        }

        return null;
    }

    public isDraw(): boolean {
        return this.winner() === null && this.board.isFull();
    }

    public whoIsCurrentPlayer(): PlayerMark {
        return this.currentPlayer;
    }

    private getNextPlayer(): PlayerMark {
        return Mark.equals(this.currentPlayer, PlayerMark.X()) ? PlayerMark.O() : PlayerMark.X();
    }
}

export default Tictactoe;
