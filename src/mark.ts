export default abstract class Mark {
    public static equals(aMark: Mark, anAnotherMark: Mark): boolean {
        return aMark.mark === anAnotherMark.mark;
    }
    
    protected mark: string;
}
