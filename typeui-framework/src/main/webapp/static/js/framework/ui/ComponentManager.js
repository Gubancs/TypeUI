/**
 *
 * @author Gabor Kokeny
 */
var ComponentManager = (function () {
    function ComponentManager() {
    }
    ComponentManager.register = function (component) {
        ComponentManager.components.put(component.getId(), component);
    };
    ComponentManager.unregister = function (component) {
        ComponentManager.components.remove(component.getId());
    };
    ComponentManager.getComponent = function (componentId) {
        return ComponentManager.components.get(componentId);
    };
    ComponentManager.getNumberOfComponents = function () {
        return ComponentManager.components.size();
    };
    ComponentManager.components = new HashMap();
    return ComponentManager;
})();
//# sourceMappingURL=ComponentManager.js.map