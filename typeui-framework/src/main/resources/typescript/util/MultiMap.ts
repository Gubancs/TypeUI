

class MultiMap<K, V> {

    private map: HashMap<K, List<V>>;

    constructor() {
        this.map = new HashMap<K, List<V>>();
    }

    get(key: K): List<V> {
        return this.map.get(key);
    }

    put(key: K, value: V) {
        var elements = this.map.get(key) || new List<V>();
        elements.add(value);
        this.map.put(key, elements);
    }

    remove(key: K): boolean {
        return this.map.remove(key);
    }

    removeElement(key: K, element: V): boolean {
        var elements = this.map.get(key);

        if (ListUtils.isEmpty(elements)) {
            return false;
        }

        return elements.remove(element);
    }

    clear() {
        this.map.clear();
    }

    forEach(callbackfn: (value: K, index: number, array: K[]) => void, thisArg?: any): void {
        this.map.forEach(callbackfn);
    }
}