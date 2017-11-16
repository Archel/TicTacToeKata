import Board from "../src/board";
import Coordinate, { Column, Row } from "../src/coordinate";
import ForbiddenMovement from "../src/forbidden-movement-error";
import { Mark } from "../src/mark";

describe("Board should", () => {
    let board;

    beforeEach(() => {
        board = new Board();
        board.placeMark(Mark.X, new Coordinate(Row.top, Column.left));
    });
    
    it("throws an exception if we put a mark in a not available position", () => {
        expect(() => {
            board.placeMark(Mark.X, new Coordinate(Row.top, Column.left));
        }).toThrow(ForbiddenMovement);
    });

    it("has three in a row", () => {
        board.placeMark(Mark.X, new Coordinate(Row.middle, Column.left));
        board.placeMark(Mark.X, new Coordinate(Row.bottom, Column.left));
        
        expect(board.threeInARow(Mark.X)).toBe(true);
    });

    it("has't three in a row", () => {
        expect(board.threeInARow(Mark.X)).toBe(false);
    });

    it("is full", () => {
        expect(board.isFull()).toBe(false);
        board.placeMark(Mark.X, new Coordinate(Row.top, Column.center));
        board.placeMark(Mark.X, new Coordinate(Row.top, Column.right));
        board.placeMark(Mark.X, new Coordinate(Row.middle, Column.left));
        board.placeMark(Mark.X, new Coordinate(Row.middle, Column.center));
        board.placeMark(Mark.X, new Coordinate(Row.middle, Column.right));
        board.placeMark(Mark.X, new Coordinate(Row.bottom, Column.left));
        board.placeMark(Mark.X, new Coordinate(Row.bottom, Column.center));
        board.placeMark(Mark.X, new Coordinate(Row.bottom, Column.right));
        expect(board.isFull()).toBe(true);
    });
});
