
/**
 * 
 * @author Gabor Kokeny
 */
class List<T> {

    private items: T[];

    constructor() {
        this.items = new Array<T>();
    }

    contains(t: T): boolean {
        return this.items.indexOf(t) > -1;
    }

    /**
    * Gets the length of the array. 
    * This is a number one higher than the highest element defined in an array.
    */
    size(): number {
        return this.items.length;
    }

    add(t: T) {
        this.items.push(t);
    }

    addAll(list: List<T>) {
        if (ListUtils.isEmpty(list)) {
            return;
        }
        this.items = this.items.concat(list.items);
    }


    /**
    * Returns the index of the first occurrence of a value in an List.
    * @param searchElement The value to locate in the array.
    * @param fromIndex The List index at which to begin the search.
    * If fromIndex is omitted, the search starts at index 0.
    */
    indexOf(t: T, fromIndex?: number): number {
        return this.items.indexOf(t, fromIndex);
    }

    get(index: number): T {
        if (this.isEmpty()) {
            return null;
        }

        if (index < 0 || index >= this.size()) {
            Log.error("Index out of bounds exception", index);
        }

        return this.items[index];
    }


    remove(element: T): boolean {
        var index = this.items.indexOf(element);

        if (index == -1) {
            return false;
        }

        return this.removeAt(index);
    }

    removeAt(index: number): boolean {
        var deletedElements = this.items.splice(index, 1);

        return ArrayUtils.isEmpty(deletedElements) ||
            !this.containsAnyOf(deletedElements);
    }

    containsAnyOf(elements: T[]): boolean {
        elements.forEach(e => {
            if (this.contains(e))
                return true;
        });
        return false;
    }

    containsAllOf(elements: T[]): boolean {
        elements.forEach(e => {
            if (!this.contains(e))
                return false;
        });
        return true;
    }

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) {
        this.items.forEach(callbackfn);
    }

    /**
     * Remove all elements from the list
     * 
     */
    clear(): List<T> {
        this.items = new Array<T>();
        return this;
    }

    /**
     * Reverse the elements in a list
     * 
     */
    reverse(): List<T> {
        this.items.reverse();

        return this;
    }

    /**
     * Check the array is empty
     * 
     * @return {boolean} Return true if the size of array equals zero
     */
    isEmpty(): boolean {
        return this.size() == 0;
    }

    /**
    * Adds all the elements of a list separated by the specified separator string.
    * @param separator A string used to separate one element of a list from the next in the resulting String. 
    * If omitted, the list elements are separated with a comma.
    */
    join(separator?: string) {
        return this.items.join(separator);
    }
    
    /**
       * Sorts a list.
       * @param compareFn The name of the function used to determine 
       * the order of the elements. 
       */
    sort(compareFn?: (a: T, b: T) => number) {
        this.items.sort(compareFn);
    }

    /**
     * Get all items in an array.
     * 
     * @return {Array} Return the copied array
     */
    toArray(): T[] {
        var copy = new Array<T>();
        return copy.concat(this.items);
    }
}