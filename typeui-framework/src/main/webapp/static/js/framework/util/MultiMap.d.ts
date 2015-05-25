declare class MultiMap<K, V> {
    private map;
    constructor();
    get(key: K): List<V>;
    put(key: K, value: V): void;
    remove(key: K): boolean;
    clear(): void;
    forEach(callbackfn: (value: K, index: number, array: K[]) => void, thisArg?: any): void;
}
