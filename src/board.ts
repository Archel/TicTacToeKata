import Coordinate from "./coordinate";
import ForbiddenMovement from "./forbidden-movement-error";
import { Mark } from "./mark";

const MAX_COORDINATE: number = 2;
const MIN_COORDINATE: number = 0;
const BOARD_LENGTH: number = 9;

class Board {
    private cells: object;

    constructor() {
        this.cells = {};
        this.inizializeBoard();
    }

    public placeMark(mark: Mark, coordinate: Coordinate): void {
        const boardCellIndex = this.calculateBoardCellIndex(coordinate);

        if (this.cellIsFilled(coordinate)) {
            throw new ForbiddenMovement();
        }

        this.fillCell(mark, coordinate);
    }

    public threeInARow(mark: Mark): boolean {
        return (this.cells[0] === mark
                && this.cells[1] === mark
                && this.cells[2] === mark)
        || (this.cells[3] === mark
                && this.cells[4] === mark
                && this.cells[5] === mark)
        || (this.cells[6] === mark)
                && this.cells[7] === mark
                && this.cells[8] === mark
        || (this.cells[0] === mark)
                && this.cells[3] === mark
                && this.cells[6] === mark
        || (this.cells[1] === mark
                && this.cells[4] === mark
                && this.cells[7] === mark)
        || (this.cells[2] === mark
                && this.cells[5] === mark
                && this.cells[8] === mark)
        || (this.cells[2] === mark
                && this.cells[4] === mark
                && this.cells[6] === mark)
        || (this.cells[0] === mark
                && this.cells[4] === mark
                && this.cells[8] === mark);
    }

    public isFull(): boolean {
        return Object.keys(this.cells).filter((element): boolean => {
            return this.cells[element] !== Mark.Empty;
        }).length === BOARD_LENGTH;
    }

    private calculateBoardCellIndex(coordinate: Coordinate): number {
        return coordinate.X() + (coordinate.Y() * 3);
    }

    private inizializeBoard(): void {
        for (let i = 0; i < BOARD_LENGTH; i ++) {
            this.cells[i] = Mark.Empty;
        }
    }

    private cellIsFilled(coordinate: Coordinate): boolean {
        const index: number = this.calculateBoardCellIndex(coordinate);
        return this.cells[index] !== Mark.Empty;
    }

    private fillCell(mark: Mark, coordinate: Coordinate): void {
        const index: number = this.calculateBoardCellIndex(coordinate);
        this.cells[index] = mark;
    }
}

export default Board;
