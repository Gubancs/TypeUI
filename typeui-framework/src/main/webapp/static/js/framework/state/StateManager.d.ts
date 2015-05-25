/**
 *
 * @author Gabor Kokeny
 */
declare class StateManager {
    private stateProvider;
    /**
        * Retrive state by key
        *
        * @param {string} key
        * @return {Object} Return the last state
        */
    loadState(stateful: Stateful): void;
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {Object} state The state that should be save
     */
    saveState(key: string, stateful: Stateful): void;
    /**
     * Set state provider
     *
     */
    setStateProvider(stateProvider: StateProvider): void;
    getStateProvider(): StateProvider;
}
