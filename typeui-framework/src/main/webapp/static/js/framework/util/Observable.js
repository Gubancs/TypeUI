var Observable = (function () {
    function Observable() {
        this.listeners = new MultiMap();
    }
    Observable.prototype.addListener = function (eventName, listener) {
        this.listeners.put(eventName, listener);
    };
    Observable.prototype.removeListeners = function (eventName) {
        return this.listeners.remove(eventName);
    };
    Observable.prototype.purgeListeners = function () {
        this.listeners.clear();
    };
    Observable.prototype.getListeners = function (eventName) {
        return this.listeners.get(eventName);
    };
    Observable.prototype.getAllListeners = function () {
        return this.listeners;
    };
    Observable.prototype.fireEvent = function (eventName) {
        var listeners = this.listeners.get(eventName);
        listeners.forEach(function (listener) {
            listener.call(new Event());
        });
    };
    return Observable;
})();
//# sourceMappingURL=Observable.js.map