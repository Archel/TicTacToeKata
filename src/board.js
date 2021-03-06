const { ForbiddenMovement } = require('./forbidden-movement-error')
const { MarkOutOfBounds } = require('./mark-out-of-bounds-error')

const MAX_COORDINATE = 2
const MIN_COORDINATE = 0
const BOARD_LENGTH = 9

function calculateBoardCellIndex(x, y) {
    return x + (y * 3)
}

function isOutOfBounds(x, y) {
    return x > MAX_COORDINATE || y > MAX_COORDINATE || x < MIN_COORDINATE || y < MIN_COORDINATE
}

class Board {
    constructor() {
        this.cells = {}
    }

    placeMark(mark, x, y) {
        if (isOutOfBounds(x, y)) {
            throw new MarkOutOfBounds()
        }
        
        const boardCellIndex = calculateBoardCellIndex(x, y)
        
        if (typeof this.cells[boardCellIndex] !== 'undefined') {
            throw new ForbiddenMovement()
        }

        this.cells[boardCellIndex] = mark
    }

    threeInARow(mark) {
        return (this.cells[0] === mark && this.cells[1] === mark && this.cells[2] === mark)
         || (this.cells[3] === mark && this.cells[4] === mark && this.cells[5] === mark)
         || (this.cells[6] === mark && this.cells[7] === mark && this.cells[8] === mark)
         || (this.cells[0] === mark && this.cells[3] === mark && this.cells[6] === mark)
         || (this.cells[1] === mark && this.cells[4] === mark && this.cells[7] === mark)
         || (this.cells[2] === mark && this.cells[5] === mark && this.cells[8] === mark)
         || (this.cells[2] === mark && this.cells[4] === mark && this.cells[6] === mark)
         || (this.cells[0] === mark && this.cells[4] === mark && this.cells[8] === mark)
         
    }

    isFull() {
        return Object.keys(this.cells).length === BOARD_LENGTH
    }
}

module.exports.Board = Board