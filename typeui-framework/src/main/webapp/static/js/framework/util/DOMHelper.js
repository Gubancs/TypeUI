/**
 * Helper class for manipulating the DOM
 */
var DOMHelper = (function () {
    function DOMHelper() {
    }
    /**
     * Append a Node to the Body
     *
     * @param {Node} node The node instance that should be append to the body
     */
    DOMHelper.appendToBody = function (node) {
        return DOMHelper.append(node, document.body);
    };
    /**
     * Append node to the target node
     *
     * @param {Node} node The node instance that should be append to the body
     * @param {Node} target The target node
     */
    DOMHelper.append = function (node, target) {
        if (target == null) {
            Log.error("Couldn't append component to DOM, because target node is undefined", node);
            return;
        }
        return target.appendChild(node);
    };
    DOMHelper.findById = function (id) {
        var element = document.getElementById(id);
        if (!element) {
            Log.error("There is no element with id", id);
        }
        return element;
    };
    DOMHelper.findByClass = function (className) {
        var nodeList = document.getElementsByClassName(className);
    };
    DOMHelper.getDocument = function () {
        return document;
    };
    DOMHelper.getBody = function () {
        return document.body;
    };
    DOMHelper.setClass = function (component, className) {
        component.getElement().className = className;
    };
    DOMHelper.addClass = function (component, className) {
        component.getElement().classList.add(className);
    };
    /**
     * Add CSS classlist to the HTMLElement
     *
     * @param {HTMLElement} htmlElement
     * @param {List<string>} classList
     */
    DOMHelper.addClassList = function (htmlElement, classList) {
        if (!htmlElement || ListUtils.isEmpty(classList)) {
            return;
        }
        classList.forEach(function (c) {
            htmlElement.classList.add(c);
        });
    };
    /**
     * Render component to the container
     *
     * @param {Component} component The component that should be render to the Container
     * @param {Container} parent The parent container
     */
    DOMHelper.renderComponent = function (component) {
        DOMHelper.append(component.getElement(), component.getContainer().getElement());
        DOMHelper.addClassList(component.getElement(), component.getClassList());
        component.getElement().id = component.getId();
        component.getElement().disabled = component.isDisabled();
        CssHelper.setWidth(component.getElement(), component.getWidth());
        CssHelper.setVisible(component.getElement(), component.isVisible());
    };
    /**
     * Remove Component from the DOM
     *
     * @param {Component} component
     */
    DOMHelper.remove = function (component) {
        if (component.hasParent()) {
            var container = component.getContainer();
            container.getElement().removeChild(component.getElement());
        }
    };
    return DOMHelper;
})();
//# sourceMappingURL=DOMHelper.js.map