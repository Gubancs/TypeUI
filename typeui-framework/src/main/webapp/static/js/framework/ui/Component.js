var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var VerticalAlign;
(function (VerticalAlign) {
    VerticalAlign[VerticalAlign["TOP"] = 0] = "TOP";
    VerticalAlign[VerticalAlign["BOTTOM"] = 1] = "BOTTOM";
    VerticalAlign[VerticalAlign["MIDDLE"] = 2] = "MIDDLE";
})(VerticalAlign || (VerticalAlign = {}));
/**
 * This class represents an UI component
 *
 * @author Gabor Kokeny
 */
var Component = (function (_super) {
    __extends(Component, _super);
    /**
     * Create a new instance of component. Parent container is required.
     *
     * @param {Container} parent The parent container is required
     * @param {boolean} useWrapperContainer This optional parameter. If useWrapperContainer is true,
     * the component will be rendered inside a wrapper Container
     */
    function Component(parent, useWrapperContainer) {
        _super.call(this);
        /**
         *
         * Use wrapper container
         */
        this.useWrapperContainer = false;
        this.useWrapperContainer = useWrapperContainer || this.useWrapperContainer;
        this.parent = this.useWrapperContainer ? new Container(parent) : parent;
        if (this.parent) {
            this.parent.add(this);
        }
        this.classList = new List();
        this.visible = true;
        this.rendered = false;
        this.disabled = false;
        this.verticalAlign = 2 /* MIDDLE */;
        this.id = Sequence.next();
    }
    Component.prototype.setParent = function (parent) {
        var c = this.useWrapperContainer ? this.getContainer() : this;
        this.getContainer().remove(c);
        this.parent = parent;
        this.parent.add(c);
    };
    /**
     *
     * Render component
     */
    Component.prototype.render = function () {
        if (this.isRendered()) {
            Log.error("Component is already rendered ", this);
        }
    };
    Component.prototype.doRender = function (htmlElement) {
        this.beforeRender();
        this.htmlElement = htmlElement;
        this.initEventListeners();
        if (this.parent) {
            DOMHelper.renderComponent(this);
            this.rendered = true;
            this.afterRender();
        }
    };
    Component.prototype.beforeRender = function () {
    };
    Component.prototype.afterRender = function () {
    };
    Component.prototype.initEventListeners = function () {
        var htmlElement = this.getElement();
        var listeners = this.getAllListeners();
        listeners.forEach(function (eventName) {
            listeners.get(eventName).forEach(function (listener) {
                htmlElement.addEventListener(eventName, listener);
            });
            Log.debug("Initialize listener", eventName, listeners.get(eventName));
        });
    };
    Component.prototype.addEventListener = function (eventName, listener) {
        _super.prototype.addListener.call(this, eventName, listener);
    };
    Component.prototype.removeEventListeners = function (eventName) {
        var htmlElement = this.getElement();
        var listeners = _super.prototype.getListeners.call(this, eventName);
        listeners.forEach(function (listener) {
            htmlElement.removeEventListener(eventName, listener);
        });
        return _super.prototype.removeListeners.call(this, eventName);
    };
    Component.prototype.on = function (eventName, listener) {
        this.addEventListener(eventName, listener);
    };
    Component.prototype.getContainer = function () {
        return this.parent;
    };
    Component.prototype.getElement = function () {
        return this.htmlElement;
    };
    Component.prototype.addClass = function (className) {
        if (this.isRendered()) {
            DOMHelper.addClass(this, className);
        }
        this.classList.add(className);
    };
    /**
     *
     * Set the CSS class
     */
    Component.prototype.setClass = function (className) {
        var _this = this;
        this.classList.clear();
        className.split(" ").forEach(function (cls) {
            _this.addClass(cls);
        });
    };
    Component.prototype.getClassList = function () {
        return this.classList;
    };
    Component.prototype.hasClass = function (className) {
        return this.classList.contains(className);
    };
    Component.prototype.isRendered = function () {
        return this.rendered;
    };
    /**
     * Remove htmlElement from the DOM and destroy itself.
     *
     */
    Component.prototype.destroy = function () {
        if (this.isRendered()) {
            DOMHelper.remove(this);
        }
        if (this.hasParent()) {
            this.getContainer().remove(this);
        }
        if (this.useWrapperContainer) {
            this.getContainer().destroy();
        }
        Log.debug("Destroy component ", this);
    };
    /**
     * Check the parent Component is null
     *
     * @return {boolean} Return true if his parent is not null
     */
    Component.prototype.hasParent = function () {
        return this.parent != null;
    };
    Component.prototype.isRoot = function () {
        return !this.hasParent();
    };
    /**
     * Set visibility of this element
     *
     * @param {boolean} visible
     */
    Component.prototype.setVisible = function (visible) {
        if (this.useWrapperContainer) {
            this.getContainer().setVisible(visible);
        }
        else {
            if (this.isRendered()) {
                CssHelper.setVisible(this.getElement(), visible);
            }
            this.visible = visible;
        }
    };
    Component.prototype.isVisible = function () {
        return this.visible;
    };
    /**
     *
     * Show  the component
     */
    Component.prototype.show = function () {
        this.setVisible(true);
    };
    /**
     * Hide the component
     */
    Component.prototype.hide = function () {
        this.setVisible(false);
    };
    Component.prototype.setWidth = function (width) {
        if (this.isRendered()) {
            CssHelper.setWidth(this.getElement(), width);
        }
        this.width = width;
    };
    Component.prototype.getWidth = function () {
        return this.width;
    };
    Component.prototype.setId = function (id) {
        this.id = id;
    };
    Component.prototype.getId = function () {
        return this.id;
    };
    /**
     * Disabled the component
     *
     * @param {boolean} disabled
     */
    Component.prototype.setDisabled = function (disabled) {
        if (this.isRendered()) {
            this.getElement().disabled = this.isDisabled();
        }
        this.disabled = disabled;
    };
    /**
     * Check the component disabled state
     *
     * @return Return true if the component is disabled
     */
    Component.prototype.isDisabled = function () {
        return this.disabled;
    };
    /**
     * Set vertical align to this component
     *
     * @param {VerticalAlign} verticalAlign
     */
    Component.prototype.setVerticalAlign = function (verticalAlign) {
        if (this.isRendered()) {
            this.getElement().disabled = this.isDisabled();
        }
        this.verticalAlign = verticalAlign;
    };
    /**
     * Get vertical align position
     *
     * @return {VerticalAlign}
     */
    Component.prototype.getVerticalAlign = function () {
        return this.verticalAlign;
    };
    return Component;
})(Observable);
//# sourceMappingURL=Component.js.map