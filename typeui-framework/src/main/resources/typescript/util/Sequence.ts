
class Sequence {

    private counter: number = 1;

    private static INSTANCE: Sequence = new Sequence();

    static next(): string {
        var str = "" + Sequence.INSTANCE.counter++;

        var pad = "cmp-"
        return pad.concat(str);
    }
}