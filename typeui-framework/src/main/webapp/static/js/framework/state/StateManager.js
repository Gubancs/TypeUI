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
     */
    StateManager.prototype.saveState = function (stateful) {
        this.stateProvider.saveState(stateful.stateId, stateful.getState());
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