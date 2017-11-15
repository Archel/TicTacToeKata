import Mark from "./mark";

const PLAYER_X = "X";
const PLAYER_O = "O";

export default class PlayerMark extends Mark {
    public static X(): PlayerMark {
      return new PlayerMark(PLAYER_X);
    }

    public static O(): PlayerMark {
        return new PlayerMark(PLAYER_O);
    }
    
    private constructor(mark: string) {
        super();
        this.mark = mark;
    }
}
