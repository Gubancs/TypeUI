
/**
 * 
 * Utility class for List
 */
class ListUtils {

    /**
     * Check the method parameter is null or is empty
     * 
     * @return Return true if the parameter 'list' is null or is an empty list
     */
    static isEmpty(list: List<any>): boolean {
        return list == null || list.isEmpty();
    }

    /**
     * Find the minimum elements in a list that 
     * contains a Comparable objects.
     * 
     * @param {List<T>} list
     * @return If the method parameter 'list' is empty then return null,
     * else return the minium element in the list
     */
    static min<T extends Comparable>(list: List<T>): T {
        if (ListUtils.isEmpty(list)) {
            return null;
        }

        var candidate = list.get(0);
        list.forEach(next => {
            if (next.compareTo(candidate) < 0) {
                candidate = next;
            }
        });
        return candidate;
    }
    
    /**
     * Find the maximum elements in a list that 
     * contains a Comparable objects.
     * 
     * @param {List<T>} list
     * @return If the method parameter 'list' is empty then return null,
     * else return the max element in the list
     */
    static max<T extends Comparable>(list: List<T>): T {
        if (ListUtils.isEmpty(list)) {
            return null;
        }

        var candidate = list.get(0);
        list.forEach(next => {
            if (candidate.compareTo(next) < 0) {
                candidate = next;
            }
        });
        return candidate;
    }
    
    /**
     * Sort elements in the list
     * 
     * @param {List<T>} list A list that should be sort
     * @return {List<T>} Return the sorted list
     */
    static sort<T extends Comparable>(list: List<T>): List<T> {
        list.sort((a, b) => {
            return a.compareTo(b);
        });
        return list;
    }

}
