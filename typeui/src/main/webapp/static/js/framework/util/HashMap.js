/**
 * An object that maps keys to values.  A map cannot contain duplicate keys;
 * each key can map to at most one value.
 *
 * @author Gabor Kokeny
 */
var HashMap = (function () {
    function HashMap() {
        this.elements = new List();
        this.valuesArray = new List();
        this.keySet = new HashSet();
    }
    HashMap.prototype.get = function (key) {
        if (key == null) {
            return null;
        }
        var value;
        this.elements.forEach(function (e) {
            if (e.key == key) {
                value = e.value;
                return value;
            }
        });
        return value;
    };
    HashMap.prototype.put = function (key, value) {
        var oldValue = this.get(key);
        if (oldValue) {
            var index = this.valuesArray.indexOf(oldValue);
            this.elements[index].value = value;
            this.valuesArray[index] = value;
            return;
        }
        this.elements.add(new KeyValue(key, value));
        this.valuesArray.add(value);
        this.keySet.add(key);
    };
    /**
     * Remove an element from the HashMap by Key
     *
     * @return {boolean} Return false if the method parameter key is null, and return true
     * if the element successfully removed from the HashMap otherwise return false
     */
    HashMap.prototype.remove = function (key) {
        if (key == null) {
            return false;
        }
        var value = this.get(key);
        var index = this.valuesArray.indexOf(value);
        if (!value || index == -1) {
            return false;
        }
        this.keySet.remove(key);
        this.elements.removeAt(index);
        this.valuesArray.removeAt(index);
        return true;
    };
    HashMap.prototype.contains = function (key) {
        return this.keySet.contains(key);
    };
    HashMap.prototype.values = function () {
        return this.valuesArray;
    };
    HashMap.prototype.keys = function () {
        return this.keySet;
    };
    /**
     * Remove all elements from the HashMap
     *
     */
    HashMap.prototype.clear = function () {
        this.elements = new List();
        this.valuesArray = new List();
        this.keySet = new HashSet();
    };
    /**
     * Get size of HashMap
     *
     * @return {number} Return the number of elements that contains this hashMap
     */
    HashMap.prototype.size = function () {
        return this.elements.size();
    };
    /**
     * Iterate on own keyset
     */
    HashMap.prototype.forEach = function (callbackfn, thisArg) {
        this.keySet.forEach(callbackfn);
    };
    return HashMap;
})();
var KeyValue = (function () {
    function KeyValue(key, value) {
        this.key_ = key;
        this.value_ = value;
    }
    Object.defineProperty(KeyValue.prototype, "key", {
        get: function () {
            return this.key_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "value", {
        get: function () {
            return this.value_;
        },
        set: function (value) {
            this.value_ = value;
        },
        enumerable: true,
        configurable: true
    });
    return KeyValue;
})();
//# sourceMappingURL=HashMap.js.map