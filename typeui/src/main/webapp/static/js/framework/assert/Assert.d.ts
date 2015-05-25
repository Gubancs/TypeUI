/**
 * Assertion utility class that assists in validating arguments.
 * Useful for identifying programmer errors early and clearly at runtime.
 *
 * @author Gabor Kokeny
 */
declare class Assert {
    /**
     * Assert that an object is not null
     *
     * @param {T} object the object to check
     * @param {string} name the parameter name
     */
    static notNull<T>(param: T, name: string): void;
    static isTrue(param: boolean): void;
}
