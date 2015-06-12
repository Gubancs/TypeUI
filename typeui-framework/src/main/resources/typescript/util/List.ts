
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


    indexOf(t: T): number {
        return this.items.indexOf(t);
    }

    get(index: number): T {
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

    join(separator?: string) {
        return this.items.join(separator);
    }
    /**
       * Sorts an list.
       * @param compareFn The name of the function used to determine 
       * the order of the elements. 
       */
    sort(compareFn?: (a: T, b: T) => number) {
        this.items.sort(compareFn);
    }
}