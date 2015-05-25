/**
 * Assertion utility class that assists in validating arguments.
 * Useful for identifying programmer errors early and clearly at runtime.
 *
 * @author Gabor Kokeny
 */
var Assert = (function () {
    function Assert() {
    }
    /**
     * Assert that an object is not null
     *
     * @param {T} object the object to check
     * @param {string} name the parameter name
     */
    Assert.notNull = function (param, name) {
        if (!param) {
            Log.error("Method parameter " + name + " cannot be null");
        }
    };
    Assert.isTrue = function (param) {
        if (!param) {
            Log.error("Boolean is press");
        }
    };
    return Assert;
})();
//# sourceMappingURL=Assert.js.map