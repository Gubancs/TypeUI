
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
}
