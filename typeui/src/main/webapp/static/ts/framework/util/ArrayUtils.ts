
/**
 * Utility class for Arrays
 * 
 * @author Gabor Kokeny
 */
class ArrayUtils {

    /**
     * Check the array is empty
     * 
     * @return {boolean} Return true if the array is null or the lenght of array is zero
     */
    static isEmpty(array: Array<any>): boolean {
        return array == null || array.length == 0;
    }

    /**
     * Check the array contains the element
     * 
     * @param {Array<T>} array
     * @param {T} element
     * 
     * @return {boolean} Return true if the array already contains the element
     */
    static contains<T>(array: Array<T>, element: T): boolean {
        return array.indexOf(element) > -1;
    }
}