export default class Coordinate {
    private x: Row;
    private y: Column;

    constructor(x: Row, y: Column) {
        this.x = x;
        this.y = y;
    }

    public X(): Row {
        return this.x;
    }

    public Y(): Column {
        return this.y;
    }
}

export enum Row {
    top = 0,
    middle = 1,
    bottom = 2,
}

export enum Column {
    left = 0,
    center = 1,
    right = 2,
}
