
interface DataProvider {

    isEmpty(): boolean;

    getValue<T>(data: T): string;

    forEach<T>(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any);
}
