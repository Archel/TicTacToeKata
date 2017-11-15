import Board from "./board";
import Coordinate from "./coordinate";

const PLAYER_X = "X";
const PLAYER_O = "O";

class Tictactoe {
    private board: Board;
    private currentPlayer: string;

    constructor(board: Board) {
        this.currentPlayer = PLAYER_X;
        this.board = board;
    }

    public play(coordinate: Coordinate) {
        this.board.placeMark(this.currentPlayer, coordinate);
        this.currentPlayer = this.getNextPlayer();
    }

    public winner() {
        if (this.board.threeInARow(PLAYER_X)) {
            return PLAYER_X;
        }

        if (this.board.threeInARow(PLAYER_O)) {
            return PLAYER_O;
        }

        return null;
    }

    public isDraw() {
        return this.winner() === null && this.board.isFull();
    }

    private getNextPlayer() {
        return this.currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    }
}

export default Tictactoe;
