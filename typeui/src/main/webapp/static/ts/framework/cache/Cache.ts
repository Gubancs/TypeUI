
/**
 * This class represents a Cache
 */
class Cache {

    private name: string;

    private elements = new HashMap<string, Object>();

    constructor(name: string) {
        this.name = name;
    }

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