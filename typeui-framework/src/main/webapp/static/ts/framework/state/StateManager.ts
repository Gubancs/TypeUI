

/**
 * 
 * @author Gabor Kokeny
 */
class StateManager {

    private stateProvider: StateProvider;


    /**
        * Retrive state by key
        * 
        * @param {string} key
        * @return {Object} Return the last state
        */
    loadState(stateful: Stateful) {
        var state = this.stateProvider.getState(stateful.stateId);
        stateful.applyState(state);
    }

    /**
     * Save state
     * 
     * @param {string} key A uniuqe key for this state
     * @param {Object} state The state that should be save
     */
    saveState(key: string, stateful: Stateful) {
        this.stateProvider.saveState(key, stateful.getState());
    } 
    
    
    /**
     * Set state provider
     * 
     */
    setStateProvider(stateProvider: StateProvider) {
        this.stateProvider = stateProvider;
    }

    getStateProvider(): StateProvider {
        return this.stateProvider;
    }

}