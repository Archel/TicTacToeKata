const { Tictactoe } = require('../src/tictactoe')
const { Board } = require('../src/board')
const { ForbiddenMovement } = require('../src/forbidden-movement-error')
const { MarkOutOfBounds } = require('../src/mark-out-of-bounds-error')

// - At first the game starts with the X player DONE
// - The X player put an X in an available position and then moves the turn to player O DONE
// - The O player put an O in an available position and then moves the turn to player X DONE
// - This two steps are repeated until either one player has three in a row or the board is full
// - If anyone has three in a row the game is finish and the player who has it is the winner of the game
// - If the board is full it will be a board
// - The board has 9 cells

describe("TicTacToe should", () => {
    let tictactoe
    beforeEach(() => {
        tictactoe = new Tictactoe(new Board())
    })

    it("start with X player", () => {
        expect(tictactoe.currentPlayer).toBe("X")
    })

    it("do some turns correctly", () => {
        tictactoe.play(0, 0)
        tictactoe.play(1, 0)
        tictactoe.play(2, 0)

        expect(tictactoe.board.cells).toEqual({0: "X", 1: "O", 2: "X"})
    })

    it("throws an exception if we do a incorrect movement", () => {
        tictactoe.play(0, 0)

        expect(() => {
            tictactoe.play(0, 0)
        }).toThrow(ForbiddenMovement)

        expect(() => {
            tictactoe.play(9, 9)
        }).toThrow(MarkOutOfBounds)

        expect(tictactoe.board.cells).toEqual({0: "X"})
    })

    it("has a winner when a player has three in a row", () => {
        tictactoe.play(0, 0)
        tictactoe.play(1, 1)
        tictactoe.play(0, 1)
        tictactoe.play(2, 1)
        tictactoe.play(0, 2)

        expect(tictactoe.winner()).toBe("X")
    })

    it("has a draw game", () => {
        tictactoe.play(0, 0)
        tictactoe.play(1, 1)
        tictactoe.play(2, 2)
        tictactoe.play(1, 2)
        tictactoe.play(1, 0)
        tictactoe.play(2, 0)
        tictactoe.play(0, 2)
        tictactoe.play(0, 1)
        tictactoe.play(2, 1)
        
        expect(tictactoe.isDraw()).toBe(true)
    })
})