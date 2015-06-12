


/**
 * Assertion utility class that assists in validating arguments.
 * Useful for identifying programmer errors early and clearly at runtime.
 * 
 * @author Gabor Kokeny
 */
class Assert {

    /**
     * Assert that an object is not null
     * 
     * @param {T} object the object to check
     * @param {string} name the parameter name
     */
    static notNull<T>(param: T, name?: string) {
        if (param == null) {
            Log.error("The function parameter " + name + " cannot be null");
        }
    }
    
    /**
     * Assert that an object value is true
     * 
     * @param {T} The object value that should be check
     */
    static isTrue<T>(param: T, name?: string) {
        if (!param) {
            Log.error("The function argument '" + name + "' must be true");
        }
    }

    /**
     * Assert that an object value is false
     * 
     * @param {T} The object value that should be check
     */
    static isFalse<T>(param: T, name?: string) {
        if (param) {
            Log.error("The function argument '" + name + "' must be false");
        }
    }
}