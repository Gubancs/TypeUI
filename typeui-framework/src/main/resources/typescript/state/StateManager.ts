

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
     */
    saveState(stateful: Stateful) {
        this.stateProvider.saveState(stateful.stateId, stateful.getState());
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