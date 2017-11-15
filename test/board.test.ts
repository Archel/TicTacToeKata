import Board from "../src/board";
import Coordinate from "../src/coordinate";
import ForbiddenMovement from "../src/forbidden-movement-error";
import MarkOutOfBounds from "../src/mark-out-of-bounds-error";

describe("Board should", () => {
    let board;

    beforeEach(() => {
        board = new Board();
        board.placeMark("X", new Coordinate(0, 0));
    });

    it("put a some marks", () => {
        board.placeMark("O", new Coordinate(1, 0));
        expect(board.cells).toEqual({0: "X", 1: "O"});
    });

    it("throws an exception if we put a mark in a not available position", () => {
        expect(() => {
            board.placeMark("X", new Coordinate(0, 0));
        }).toThrow(ForbiddenMovement);
    });

    it("throws an excepetion if we put a mark out of bounds", () => {
        expect(() => {
            board.placeMark("X", new Coordinate(0, 3));
        }).toThrow(MarkOutOfBounds);

        expect(() => {
            board.placeMark("X", new Coordinate(3, 0));
        }).toThrow(MarkOutOfBounds);

        expect(() => {
            board.placeMark("X", new Coordinate(3, 3));
        }).toThrow(MarkOutOfBounds);
    });

    it("has three in a row", () => {
        board.placeMark("X", new Coordinate(1, 0));
        board.placeMark("X", new Coordinate(2, 0));
        expect(board.threeInARow("X")).toBe(true);
    });

    it("has't three in a row", () => {
        expect(board.threeInARow("X")).toBe(false);
    });

    it("is full", () => {
        expect(board.isFull()).toBe(false);
        board.placeMark("X", new Coordinate(0, 1));
        board.placeMark("X", new Coordinate(0, 2));
        board.placeMark("X", new Coordinate(1, 0));
        board.placeMark("X", new Coordinate(1, 1));
        board.placeMark("X", new Coordinate(1, 2));
        board.placeMark("X", new Coordinate(2, 0));
        board.placeMark("X", new Coordinate(2, 1));
        board.placeMark("X", new Coordinate(2, 2));

        expect(board.isFull()).toBe(true);
    });
});
