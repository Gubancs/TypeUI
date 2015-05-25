/**
 * Data provider for List impelementations
 *
 * @author Gabor Kokeny
 */
var ListDataProvider = (function () {
    function ListDataProvider(list) {
        Assert.notNull(list, "list");
        this.list = list;
    }
    ListDataProvider.prototype.getValue = function (data) {
        return null;
    };
    ListDataProvider.prototype.forEach = function (callbackfn, thisArg) {
        this.list.forEach(callbackfn);
    };
    ListDataProvider.prototype.isEmpty = function () {
        return ListUtils.isEmpty(this.list);
    };
    return ListDataProvider;
})();
//# sourceMappingURL=ListDataProvider.js.map