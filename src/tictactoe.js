class Tictactoe {
    constructor(board) {
        this.currentPlayer = "X"
        this.board = board
    }

    play(x, y) {
        this.board.placeMark(this.currentPlayer, x, y)
    }
}

module.exports.Tictactoe = Tictactoe