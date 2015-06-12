

/**
 * This interface imposes a total ordering on the objects of each class that
 * implements it.
 * 
 * @author Gabor Kokeny
 */
interface Comparable {

    /**
     * Compares this object with the specified object for order.  Returns a
     * negative integer, zero, or a positive integer as this object is less
     * than, equal to, or greater than the specified object.
     * 
     * @param  {T} object the object to be compared.
     * @return {} a negative integer, zero, or a positive integer as this object
     *          is less than, equal to, or greater than the specified object.* 
     */
    compareTo<T>(object: T): number;
}