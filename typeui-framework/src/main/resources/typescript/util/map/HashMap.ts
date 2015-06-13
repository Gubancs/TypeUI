

/**
 * An object that maps keys to values.  A map cannot contain duplicate keys;
 * each key can map to at most one value.
 * 
 * @author Gabor Kokeny
 */
class HashMap<K, V>{

    private elements: List<KeyValue<K, V>>;
    private valuesArray: List<V>;
    private keySet: HashSet<K>;

    constructor() {
        this.elements = new List<KeyValue<K, V>>();
        this.valuesArray = new List<V>();
        this.keySet = new HashSet<K>();
    }


    get(key: K): V {
        if (key == null) {
            return null;
        }

        var value;
        this.elements.forEach(e => {
            if (e.key == key) {
                value = e.value;
                return value;
            }
        });
        return value;
    }

    put(key: K, value: V) {
        var oldValue = this.get(key);
        if (oldValue) {
            var index = this.valuesArray.indexOf(oldValue);
            this.elements[index].value = value;
            this.valuesArray[index] = value;
            return;
        }
        this.elements.add(new KeyValue(key, value));
        this.valuesArray.add(value);
        this.keySet.add(key);
    }



    /**
     * Remove an element from the HashMap by Key
     * 
     * @return {boolean} Return false if the method parameter key is null, and return true
     * if the element successfully removed from the HashMap otherwise return false 
     */
    remove(key: K): boolean {
        if (key == null) {
            return false;
        }

        var value = this.get(key);
        var index = this.valuesArray.indexOf(value);

        if (!value || index == -1) {
            return false;
        }

        this.keySet.remove(key);
        this.elements.removeAt(index);
        this.valuesArray.removeAt(index);
        return true;
    }

    contains(key: K): boolean {
        return this.keySet.contains(key);
    }


    values(): List<V> {
        return this.valuesArray;
    }

    keys(): List<K> {
        return this.keySet;
    }

    /**
     * Remove all elements from the HashMap
     * 
     */
    clear() {
        this.elements = new List<KeyValue<K, V>>();
        this.valuesArray = new List<V>();
        this.keySet = new HashSet<K>();
    }

    /**
     * Get size of HashMap
     * 
     * @return {number} Return the number of elements that contains this hashMap
     */
    size(): number {
        return this.elements.size();
    }
    
    /**
     * Iterate on own keyset
     */
    forEach(callbackfn: (value: K, index: number, array: K[]) => void, thisArg?: any): void {
        this.keySet.forEach(callbackfn);
    }
}

class KeyValue<K, V> {

    private key_: K;

    private value_: V;

    constructor(key: K, value: V) {
        this.key_ = key;
        this.value_ = value;
    }

    get key(): K {
        return this.key_;
    }

    get value(): V {
        return this.value_;
    }

    set value(value: V) {
        this.value_ = value;
    }
}