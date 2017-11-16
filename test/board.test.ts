import Board from "../src/board";
import Coordinate, { Column, Row } from "../src/coordinate";
import ForbiddenMovement from "../src/forbidden-movement-error";
import MarkOutOfBounds from "../src/mark-out-of-bounds-error";
import PlayerMark from "../src/player-mark";

describe("Board should", () => {
    let board;

    beforeEach(() => {
        board = new Board();
        board.placeMark(PlayerMark.X(), new Coordinate(Row.top, Column.left));
    });
    
    it("throws an exception if we put a mark in a not available position", () => {
        expect(() => {
            board.placeMark(PlayerMark.X(), new Coordinate(Row.top, Column.left));
        }).toThrow(ForbiddenMovement);
    });

    it("has three in a row", () => {
        board.placeMark(PlayerMark.X(), new Coordinate(Row.middle, Column.left));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.bottom, Column.left));
        
        expect(board.threeInARow(PlayerMark.X())).toBe(true);
    });

    it("has't three in a row", () => {
        expect(board.threeInARow(PlayerMark.X())).toBe(false);
    });

    it("is full", () => {
        expect(board.isFull()).toBe(false);
        board.placeMark(PlayerMark.X(), new Coordinate(Row.top, Column.center));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.top, Column.right));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.middle, Column.left));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.middle, Column.center));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.middle, Column.right));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.bottom, Column.left));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.bottom, Column.center));
        board.placeMark(PlayerMark.X(), new Coordinate(Row.bottom, Column.right));
        expect(board.isFull()).toBe(true);
    });
});
