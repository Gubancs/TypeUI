/**
 *
 * Utility class for List
 */
var ListUtils = (function () {
    function ListUtils() {
    }
    /**
     * Check the method parameter is null or is empty
     *
     * @return Return true if the parameter 'list' is null or is an empty list
     */
    ListUtils.isEmpty = function (list) {
        return list == null || list.size() == 0;
    };
    return ListUtils;
})();
//# sourceMappingURL=ListUtils.js.map