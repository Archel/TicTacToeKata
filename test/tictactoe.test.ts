import Board from "../src/board";
import Coordinate from "../src/coordinate";
import ForbiddenMovement from "../src/forbidden-movement-error";
import Mark from "../src/mark";
import MarkOutOfBounds from "../src/mark-out-of-bounds-error";
import PlayerMark from "../src/player-mark";
import Tictactoe from "../src/tictactoe";

// - At first the game starts with the X player
// - The X player put an X in an available position and then moves the turn to player O
// - The O player put an O in an available position and then moves the turn to player X
// - This two steps are repeated until either one player has three in a row or the board is full
// - If anyone has three in a row the game is finish and the player who has it is the winner of the game
// - If the board is full it will be a board
// - The board has 9 cells

describe("TicTacToe should", () => {
    let tictactoe;

    beforeEach(() => {
        tictactoe = new Tictactoe(new Board());
    });

    it("start with X player", () => {
        expect(tictactoe.whoIsCurrentPlayer().equals(PlayerMark.X())).toBe(true);
    });

    it("throws an exception if we do a incorrect movement", () => {
        tictactoe.play(new Coordinate(0, 0));

        expect(() => {
            tictactoe.play(new Coordinate(0, 0));
        }).toThrow(ForbiddenMovement);

        expect(() => {
            tictactoe.play(new Coordinate(9, 9));
        }).toThrow(MarkOutOfBounds);
    });

    it("has a winner when a player has three in a row", () => {
        tictactoe.play(new Coordinate(0, 0));
        tictactoe.play(new Coordinate(1, 1));
        tictactoe.play(new Coordinate(0, 1));
        tictactoe.play(new Coordinate(2, 1));
        tictactoe.play(new Coordinate(0, 2));

        expect(tictactoe.winner().equals(PlayerMark.X())).toBe(true);
    });

    it("has a draw game", () => {
        tictactoe.play(new Coordinate(0, 0));
        tictactoe.play(new Coordinate(1, 1));
        tictactoe.play(new Coordinate(2, 2));
        tictactoe.play(new Coordinate(1, 2));
        tictactoe.play(new Coordinate(1, 0));
        tictactoe.play(new Coordinate(2, 0));
        tictactoe.play(new Coordinate(0, 2));
        tictactoe.play(new Coordinate(0, 1));
        tictactoe.play(new Coordinate(2, 1));

        expect(tictactoe.isDraw()).toBe(true);
    });
});
