/**
 *
 *
 * @author Gabor Kokeny
 */
var LocalStorageStateProvider = (function () {
    function LocalStorageStateProvider() {
        this.storage = window.localStorage;
    }
    /**
     * Retrive state by key
     *
     * @param {string} key
     * @return {T} Return the last state
     */
    LocalStorageStateProvider.prototype.getState = function (key) {
        var stringState = this.storage.getItem(key);
        return JSON.parse(stringState);
    };
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {T} state The state that should be save
     */
    LocalStorageStateProvider.prototype.saveState = function (key, state) {
        this.storage.setItem(key, JSON.stringify(state));
    };
    return LocalStorageStateProvider;
})();
//# sourceMappingURL=LocalStorageStateProvider.js.map