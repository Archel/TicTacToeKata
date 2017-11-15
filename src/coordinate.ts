export default class Coordinate {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public X(): number {
        return this.x;
    }

    public Y(): number {
        return this.y;
    }
}
