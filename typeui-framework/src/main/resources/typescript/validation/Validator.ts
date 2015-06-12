

/**
 * 
 * @author Gabor Kokeny
 */
interface Validator {
    isValid<T>(object: T): boolean;
}