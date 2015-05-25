var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HashSet = (function (_super) {
    __extends(HashSet, _super);
    function HashSet() {
        _super.apply(this, arguments);
    }
    HashSet.prototype.add = function (t) {
        if (this.contains(t)) {
            return;
        }
        _super.prototype.add.call(this, t);
    };
    return HashSet;
})(List);
//# sourceMappingURL=HashSet.js.map