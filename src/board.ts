import Coordinate from "./coordinate";
import ForbiddenMovement from "./forbidden-movement-error";
import MarkOutOfBounds from "./mark-out-of-bounds-error";

const MAX_COORDINATE: number = 2;
const MIN_COORDINATE: number = 0;
const BOARD_LENGTH: number = 9;

class Board {
    private cells: object;

    constructor() {
        this.cells = {};
    }

    public placeMark(mark: string, coordinate: Coordinate): void {
        if (this.isOutOfBounds(coordinate)) {
            throw new MarkOutOfBounds();
        }

        const boardCellIndex = this.calculateBoardCellIndex(coordinate);

        if (typeof this.cells[boardCellIndex] !== "undefined") {
            throw new ForbiddenMovement();
        }

        this.cells[boardCellIndex] = mark;
    }

    public threeInARow(mark): boolean {
        return (this.cells[0] === mark && this.cells[1] === mark && this.cells[2] === mark)
         || (this.cells[3] === mark && this.cells[4] === mark && this.cells[5] === mark)
         || (this.cells[6] === mark && this.cells[7] === mark && this.cells[8] === mark)
         || (this.cells[0] === mark && this.cells[3] === mark && this.cells[6] === mark)
         || (this.cells[1] === mark && this.cells[4] === mark && this.cells[7] === mark)
         || (this.cells[2] === mark && this.cells[5] === mark && this.cells[8] === mark)
         || (this.cells[2] === mark && this.cells[4] === mark && this.cells[6] === mark)
         || (this.cells[0] === mark && this.cells[4] === mark && this.cells[8] === mark);
    }

    public isFull(): boolean {
        return Object.keys(this.cells).length === BOARD_LENGTH;
    }

    private isOutOfBounds(coordinate: Coordinate): boolean {
        return coordinate.X() > MAX_COORDINATE
                || coordinate.Y() > MAX_COORDINATE
                || coordinate.X() < MIN_COORDINATE
                || coordinate.Y() < MIN_COORDINATE;
    }
    
    private calculateBoardCellIndex(coordinate: Coordinate): number {
        return coordinate.X() + (coordinate.Y() * 3);
    }
}

export default Board;
