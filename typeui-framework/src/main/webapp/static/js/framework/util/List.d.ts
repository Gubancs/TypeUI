declare class List<T> {
    private array;
    constructor();
    contains(t: T): boolean;
    size(): number;
    add(t: T): void;
    indexOf(t: T): number;
    get(index: number): T;
    remove(t: T): void;
    removeAt(index: number): void;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    /**
     * Remove all elements from the list
     *
     */
    clear(): void;
    /**
     * Reverse elements
     *
     */
    reverse(): void;
}
