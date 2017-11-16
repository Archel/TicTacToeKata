export default abstract class Mark {
    protected mark: string;

    public equals(aMark: Mark): boolean {
        return this.mark === aMark.mark;
    }
}
