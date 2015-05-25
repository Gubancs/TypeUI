/**
 * This class represents a Cache
 */
declare class Cache {
    private name;
    private elements;
    constructor(name: string);
    put(key: string, object: Object): void;
    get(key: string): Object;
    clear(): void;
    getName(): string;
}
