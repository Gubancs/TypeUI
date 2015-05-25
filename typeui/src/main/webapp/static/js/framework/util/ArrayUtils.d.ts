/**
 * Utility class for Arrays
 *
 * @author Gabor Kokeny
 */
declare class ArrayUtils {
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the array is null or the lenght of array is zero
     */
    static isEmpty(array: Array<any>): boolean;
    /**
     * Check the array contains the element
     *
     * @param {Array<T>} array
     * @param {T} element
     *
     * @return {boolean} Return true if the array already contains the element
     */
    static contains<T>(array: Array<T>, element: T): boolean;
}
