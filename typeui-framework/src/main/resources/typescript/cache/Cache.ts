
/**
 * This class represents a Cache
 * 
 * @author Gabor Kokeny
 */
class Cache {

    /**
     * 
     * The unique name of a cache
     */
    private name: string;

    private elements = new HashMap<string, Object>();

    /**
     * Create a new instance of a cache
     * 
     * @param {string} name The name of the cache
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Put an object to this cache
     * 
     * @param {string} key
     * @param {Object} object 
     */
    put(key: string, object: Object) {
        this.elements.put(key, object);
    }

    get(key: string): Object {
        return this.elements.get(key);
    }

    clear(): void {
        this.elements.clear();
    }

    getName(): string {
        return this.name;
    }

}