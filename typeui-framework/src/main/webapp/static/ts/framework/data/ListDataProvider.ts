

/**
 * Data provider for List impelementations
 * 
 * @author Gabor Kokeny
 */
class ListDataProvider<T> implements DataProvider {

    private list: List<T>;

    constructor(list: List<T>) {
        Assert.notNull(list, "list");
        this.list = list;
    }

    getValue(data: T): string { return null; }

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        this.list.forEach(callbackfn);
    }
}

