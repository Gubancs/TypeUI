/**
 *
 * @author Gabor Kokeny
 */
var StateManager = (function () {
    function StateManager() {
    }
    /**
        * Retrive state by key
        *
        * @param {string} key
        * @return {Object} Return the last state
        */
    StateManager.prototype.loadState = function (stateful) {
        var state = this.stateProvider.getState(stateful.stateId);
        stateful.applyState(state);
    };
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {Object} state The state that should be save
     */
    StateManager.prototype.saveState = function (key, stateful) {
        this.stateProvider.saveState(key, stateful.getState());
    };
    /**
     * Set state provider
     *
     */
    StateManager.prototype.setStateProvider = function (stateProvider) {
        this.stateProvider = stateProvider;
    };
    StateManager.prototype.getStateProvider = function () {
        return this.stateProvider;
    };
    return StateManager;
})();
//# sourceMappingURL=StateManager.js.map