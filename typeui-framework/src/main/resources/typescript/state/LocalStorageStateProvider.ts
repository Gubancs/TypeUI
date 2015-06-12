

/**
 * 
 * 
 * @author Gabor Kokeny
 */
class LocalStorageStateProvider implements StateProvider {


    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }
    
    
    /**
     * Retrive state by key
     * 
     * @param {string} key
     * @return {T} Return the last state
     */
    getState<T>(key: string): T {
        var stringState = this.storage.getItem(key);

        return JSON.parse(stringState);
    }

    
    /**
     * Save state
     * 
     * @param {string} key A uniuqe key for this state
     * @param {T} state The state that should be save
     */
    saveState<T>(key: string, state: T) {
        this.storage.setItem(key, JSON.stringify(state));
    }
}