

/**
 * 
 * @author Gabor Kokeny
 */
class Integer implements Comparable {

    private value: number = 0;

    constructor(value: number) {
        this.value = value;
    }

    static valueOf(value: number) {
        return new Integer(value);
    }

    intValue(): number {
        return this.value;
    }

    parseInt(stringValue: string) {
        this.value = parseInt(stringValue, 10);
    }

    compareTo(integer: Integer) {
        return Integer.compare(this.intValue(), integer.intValue());
    }

    static compare(x: number, y: number): number {
        Assert.notNull(x, "x");
        Assert.notNull(y, "y");

        return (x < y) ? -1 : ((x == y) ? 0 : 1);
    }
}