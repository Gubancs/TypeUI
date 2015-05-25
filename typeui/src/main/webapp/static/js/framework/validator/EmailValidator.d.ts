/**
 * Validator for email addresses
 *
 * @author Gabor Kokeny
 */
declare class EmailValidator implements Validator {
    isValid<T>(object: T): boolean;
}
