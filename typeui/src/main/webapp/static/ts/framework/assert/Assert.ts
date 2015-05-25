


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
    static notNull<T>(param: T, name: string) {
        if (!param) {
            Log.error("Method parameter " + name + " cannot be null");
        }
    }

    static isTrue(param: boolean) {
        if (!param) {
            Log.error("Boolean is press");
        }
    }
}