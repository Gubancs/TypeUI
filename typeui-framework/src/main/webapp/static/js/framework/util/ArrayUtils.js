/**
 * Utility class for Arrays
 *
 * @author Gabor Kokeny
 */
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the array is null or the lenght of array is zero
     */
    ArrayUtils.isEmpty = function (array) {
        return array == null || array.length == 0;
    };
    /**
     * Check the array contains the element
     *
     * @param {Array<T>} array
     * @param {T} element
     *
     * @return {boolean} Return true if the array already contains the element
     */
    ArrayUtils.contains = function (array, element) {
        return array.indexOf(element) > -1;
    };
    return ArrayUtils;
})();
//# sourceMappingURL=ArrayUtils.js.map