var MultiMap = (function () {
    function MultiMap() {
        this.map = new HashMap();
    }
    MultiMap.prototype.get = function (key) {
        return this.map.get(key);
    };
    MultiMap.prototype.put = function (key, value) {
        var elements = this.map.get(key) || new List();
        elements.add(value);
        this.map.put(key, elements);
    };
    MultiMap.prototype.remove = function (key) {
        return this.map.remove(key);
    };
    MultiMap.prototype.clear = function () {
        this.map.clear();
    };
    MultiMap.prototype.forEach = function (callbackfn, thisArg) {
        this.map.forEach(callbackfn);
    };
    return MultiMap;
})();
//# sourceMappingURL=MultiMap.js.map