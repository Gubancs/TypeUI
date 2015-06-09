var List = (function () {
    function List() {
        this.array = new Array();
    }
    List.prototype.contains = function (t) {
        return this.array.indexOf(t) > -1;
    };
    List.prototype.size = function () {
        return this.array.length;
    };
    List.prototype.add = function (t) {
        this.array.push(t);
    };
    List.prototype.addAll = function (list) {
        this.concat(list);
    };
    List.prototype.concat = function (list) {
        if (ListUtils.isEmpty(list)) {
            return;
        }
        this.array = this.array.concat(list.array);
    };
    List.prototype.indexOf = function (t) {
        return this.array.indexOf(t);
    };
    List.prototype.get = function (index) {
        return this.array[index];
    };
    List.prototype.remove = function (element) {
        var index = this.array.indexOf(element);
        if (index > -1) {
            this.removeAt(index);
        }
    };
    List.prototype.removeAt = function (index) {
        this.array.splice(index, 1);
    };
    List.prototype.forEach = function (callbackfn, thisArg) {
        this.array.forEach(callbackfn);
    };
    /**
     * Remove all elements from the list
     *
     */
    List.prototype.clear = function () {
        this.array = new Array();
    };
    /**
     * Reverse elements
     *
     */
    List.prototype.reverse = function () {
        this.array.reverse();
    };
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the size of array equals zero
     */
    List.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    return List;
})();
//# sourceMappingURL=List.js.map