const PLAYER_X = "X";
const PLAYER_O = "O";
function getNextPlayer() {
    return this.currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}
class Tictactoe {
    constructor(board) {
        this.currentPlayer = PLAYER_X;
        this.board = board;
    }
    play(x, y) {
        this.board.placeMark(this.currentPlayer, x, y);
        this.currentPlayer = getNextPlayer.call(this);
    }
    winner() {
        if (this.board.threeInARow(PLAYER_X)) {
            return PLAYER_X;
        }
        if (this.board.threeInARow(PLAYER_O)) {
            return PLAYER_O;
        }
        return null;
    }
    isDraw() {
        return this.winner() === null && this.board.isFull();
    }
}
module.exports.Tictactoe = Tictactoe;
