/**
 * An object that maps keys to values.  A map cannot contain duplicate keys;
 * each key can map to at most one value.
 *
 * @author Gabor Kokeny
 */
declare class HashMap<K, V> {
    private elements;
    private valuesArray;
    private keySet;
    constructor();
    get(key: K): V;
    put(key: K, value: V): void;
    /**
     * Remove an element from the HashMap by Key
     *
     * @return {boolean} Return false if the method parameter key is null, and return true
     * if the element successfully removed from the HashMap otherwise return false
     */
    remove(key: K): boolean;
    contains(key: K): boolean;
    values(): List<V>;
    keys(): List<K>;
    /**
     * Remove all elements from the HashMap
     *
     */
    clear(): void;
    /**
     * Get size of HashMap
     *
     * @return {number} Return the number of elements that contains this hashMap
     */
    size(): number;
    /**
     * Iterate on own keyset
     */
    forEach(callbackfn: (value: K, index: number, array: K[]) => void, thisArg?: any): void;
}
declare class KeyValue<K, V> {
    private key_;
    private value_;
    constructor(key: K, value: V);
    key: K;
    value: V;
}
