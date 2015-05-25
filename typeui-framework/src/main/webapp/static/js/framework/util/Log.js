var Log = (function () {
    function Log() {
    }
    Log.info = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.info(message, params);
    };
    Log.error = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.error(message, params);
    };
    Log.warn = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.warn(message, params);
    };
    Log.debug = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.debug(message, params);
    };
    return Log;
})();
//# sourceMappingURL=Log.js.map