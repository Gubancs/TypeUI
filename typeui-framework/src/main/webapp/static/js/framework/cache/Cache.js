/**
 * This class represents a Cache
 */
var Cache = (function () {
    function Cache(name) {
        this.elements = new HashMap();
        this.name = name;
    }
    Cache.prototype.put = function (key, object) {
        this.elements.put(key, object);
    };
    Cache.prototype.get = function (key) {
        return this.elements.get(key);
    };
    Cache.prototype.clear = function () {
        this.elements.clear();
    };
    Cache.prototype.getName = function () {
        return this.name;
    };
    return Cache;
})();
//# sourceMappingURL=Cache.js.map