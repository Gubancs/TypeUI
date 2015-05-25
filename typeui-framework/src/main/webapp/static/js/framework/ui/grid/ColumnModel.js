/**
 *
 * @author Gabor Kokeny
 */
var ColumnModel = (function () {
    function ColumnModel() {
        this.columns = new List();
    }
    ColumnModel.prototype.addColumn = function (column) {
        this.columns.add(column);
    };
    ColumnModel.prototype.forEach = function (callbackfn, thisArg) {
        this.columns.forEach(callbackfn);
    };
    return ColumnModel;
})();
//# sourceMappingURL=ColumnModel.js.map