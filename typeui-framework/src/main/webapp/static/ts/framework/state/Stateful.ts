

/**
 * 
 * @author Gabor Kokeny
 */
interface Stateful {
    
    /**
     * The unique stateId
     */
    stateId: string;
    
    /**
     * Get current state 
     * 
     * @return {T} Return the current state of this bean
     */
    getState<T>(): T;

    /**
     * 
     * Aplly state to this object
     * 
     * @param {T} state
     */
    applyState<T>(state: T);
}