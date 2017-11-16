import Board from "../src/board";
import Coordinate, { Column, Row } from "../src/coordinate";
import ForbiddenMovement from "../src/forbidden-movement-error";
import { Mark } from "../src/mark";
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
        expect(tictactoe.whoIsCurrentPlayer() === Mark.X).toBe(true);
    });

    it("throws an exception if we do a incorrect movement", () => {
        tictactoe.play(new Coordinate(Row.top, Column.left));

        expect(() => {
            tictactoe.play(new Coordinate(Row.top, Column.left));
        }).toThrow(ForbiddenMovement);
    });

    it("has a winner when a player has three in a row", () => {
        tictactoe.play(new Coordinate(Row.top, Column.left));
        tictactoe.play(new Coordinate(Row.middle, Column.center));
        tictactoe.play(new Coordinate(Row.top, Column.center));
        tictactoe.play(new Coordinate(Row.bottom, Column.center));
        tictactoe.play(new Coordinate(Row.top, Column.right));

        expect(tictactoe.winner() === Mark.X).toBe(true);
    });

    it("has a draw game", () => {
        tictactoe.play(new Coordinate(Row.top, Column.left));
        tictactoe.play(new Coordinate(Row.middle, Column.center));
        tictactoe.play(new Coordinate(Row.bottom, Column.right));
        tictactoe.play(new Coordinate(Row.middle, Column.right));
        tictactoe.play(new Coordinate(Row.middle, Column.left));
        tictactoe.play(new Coordinate(Row.bottom, Column.left));
        tictactoe.play(new Coordinate(Row.top, Column.right));
        tictactoe.play(new Coordinate(Row.top, Column.center));
        tictactoe.play(new Coordinate(Row.bottom, Column.center));

        expect(tictactoe.isDraw()).toBe(true);
    });
});
