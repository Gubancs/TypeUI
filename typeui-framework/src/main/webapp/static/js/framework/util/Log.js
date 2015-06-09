var Log = (function () {
    function Log() {
    }
    Log.info = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        Log.console.info(message, params);
        return this;
    };
    Log.error = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        Log.console.error(message, params);
        return this;
    };
    Log.warn = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        Log.console.warn(message, params);
        return this;
    };
    Log.debug = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        Log.console.debug(message, params);
        return this;
    };
    Log.groupStart = function (title) {
        Log.console.groupCollapsed(title);
        return this;
    };
    Log.groupEnd = function () {
        console.groupEnd();
        return this;
    };
    Log.console = console;
    return Log;
})();
//# sourceMappingURL=Log.js.map