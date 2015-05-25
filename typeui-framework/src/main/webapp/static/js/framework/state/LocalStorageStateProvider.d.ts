/**
 *
 *
 * @author Gabor Kokeny
 */
declare class LocalStorageStateProvider implements StateProvider {
    private storage;
    constructor();
    /**
     * Retrive state by key
     *
     * @param {string} key
     * @return {T} Return the last state
     */
    getState<T>(key: string): T;
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {T} state The state that should be save
     */
    saveState<T>(key: string, state: T): void;
}
