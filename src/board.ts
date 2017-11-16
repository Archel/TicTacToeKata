import Coordinate from "./coordinate";
import EmptyMark from "./empty-mark";
import ForbiddenMovement from "./forbidden-movement-error";
import Mark from "./mark";
import MarkOutOfBounds from "./mark-out-of-bounds-error";
import PlayerMark from "./player-mark";

const MAX_COORDINATE: number = 2;
const MIN_COORDINATE: number = 0;
const BOARD_LENGTH: number = 9;

class Board {
    private cells: object;

    constructor() {
        this.cells = {};
        this.inizializeBoard();
    }

    public placeMark(mark: PlayerMark, coordinate: Coordinate): void {
        if (this.isOutOfBounds(coordinate)) {
            throw new MarkOutOfBounds();
        }

        const boardCellIndex = this.calculateBoardCellIndex(coordinate);

        if (this.cellIsFilled(coordinate)) {
            throw new ForbiddenMovement();
        }

        this.fillCell(mark, coordinate);
    }

    public threeInARow(mark: PlayerMark): boolean {
        return (this.cells[0].equals(mark)
                && this.cells[1].equals(mark)
                && this.cells[2].equals(mark))
        || (this.cells[3].equals(mark)
                && this.cells[4].equals(mark)
                && this.cells[5].equals(mark))
        || (this.cells[6].equals(mark))
                && this.cells[7].equals(mark)
                && this.cells[8].equals(mark)
        || (this.cells[0].equals(mark))
                && this.cells[3].equals(mark)
                && this.cells[6].equals(mark)
        || (this.cells[1].equals(mark)
                && this.cells[4].equals(mark)
                && this.cells[7].equals(mark))
        || (this.cells[2].equals(mark)
                && this.cells[5].equals(mark)
                && this.cells[8].equals(mark))
        || (this.cells[2].equals(mark)
                && this.cells[4].equals(mark)
                && this.cells[6].equals(mark))
        || (this.cells[0].equals(mark)
                && this.cells[4].equals(mark)
                && this.cells[8].equals(mark));
    }

    public isFull(): boolean {
        return Object.keys(this.cells).filter((element): boolean => {
            return !(this.cells[element] instanceof EmptyMark);
        }).length === BOARD_LENGTH;
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

    private inizializeBoard(): void {
        for (let i = 0; i < BOARD_LENGTH; i ++) {
            this.cells[i] = new EmptyMark();
        }
    }

    private cellIsFilled(coordinate: Coordinate): boolean {
        const index: number = this.calculateBoardCellIndex(coordinate);
        return !(this.cells[index] instanceof EmptyMark);
    }

    private fillCell(mark: PlayerMark, coordinate: Coordinate): void {
        const index: number = this.calculateBoardCellIndex(coordinate);
        this.cells[index] = mark;
    }
}

export default Board;
