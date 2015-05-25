/**
 *
 * Data provider for enumerations
 *
 * @author Gabor Kokeny
 */
declare class EnumDataProvider implements DataProvider {
    private dataProvider;
    constructor(object: Object);
    getValue<T>(data: T): string;
    forEach<T>(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}
