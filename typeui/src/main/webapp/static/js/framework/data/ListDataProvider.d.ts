/**
 * Data provider for List impelementations
 *
 * @author Gabor Kokeny
 */
declare class ListDataProvider<T> implements DataProvider {
    private list;
    constructor(list: List<T>);
    getValue(data: T): string;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}
