const { Tictactoe } = require('../src/tictactoe')

// - At first the game starts with the X player
// - The X player put an X in an available position and then moves the turn to player O
// - The O player put an O in an available position and then moves the turn to player X
// - This two steps are repeated until either one player has three in a row or the board is full
// - If anyone has three in a row the game is draw
// - The board has 9 cells

describe("TicTacToe should", () => {
    it("start with X player", () => {
        let tictactoe = new Tictactoe()
        expect(tictactoe.currentPlayer).toBe("X")
    })

    it("puts an X in a position", () => {
        tictactoe = new Tictactoe()
        tictactoe.play(0, 0)
        expect(tictactoe.board).toEqual({
            "X" : [{x: 0, y: 0}],
            "O" : []
        })
    })
})