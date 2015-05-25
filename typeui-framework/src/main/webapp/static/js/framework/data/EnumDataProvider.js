/**
 *
 * Data provider for enumerations
 *
 * @author Gabor Kokeny
 */
var EnumDataProvider = (function () {
    function EnumDataProvider(object) {
        Log.info("Object ", object);
        var list = new List();
        for (var val in object) {
            if (isNaN(val)) {
                list.add(val);
            }
        }
        this.dataProvider = new ListDataProvider(list);
    }
    EnumDataProvider.prototype.getValue = function (data) {
        return this.dataProvider.getValue(data);
    };
    EnumDataProvider.prototype.forEach = function (callbackfn, thisArg) {
        this.dataProvider.forEach(callbackfn);
    };
    EnumDataProvider.prototype.isEmpty = function () {
        return this.dataProvider.isEmpty();
    };
    return EnumDataProvider;
})();
//# sourceMappingURL=EnumDataProvider.js.map