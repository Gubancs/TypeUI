var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(parent, useWrapperContainer) {
        _super.call(this, parent, useWrapperContainer);
        this.children = new List();
        this.init();
        this.createComponents();
    }
    Container.prototype.init = function () {
    };
    Container.prototype.createComponents = function () {
    };
    Container.prototype.render = function () {
        var divElement = ElementFactory.createDiv();
        this.doRender(divElement);
    };
    /**
     * Render container with child components
     *
     * @protected
     */
    Container.prototype.doRender = function (htmlElement) {
        _super.prototype.doRender.call(this, htmlElement);
        this.children.forEach(function (c) {
            c.render();
        });
    };
    /**
     * Add component to this container
     *
     */
    Container.prototype.add = function (component) {
        this.children.add(component);
    };
    /**
     * Remove component from this container
     *
     */
    Container.prototype.remove = function (component) {
        this.children.remove(component);
    };
    /**
     * Get children of this container
     */
    Container.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Destroy container with all children component
     */
    Container.prototype.destroy = function () {
        Log.groupStart("Destroy container: " + this.getId());
        Log.debug("Destroy children components", this.getChildren().size());
        this.children.forEach(function (child) {
            console.debug("Destroy child component", child);
            child.destroy();
        });
        _super.prototype.destroy.call(this);
        Log.groupEnd();
    };
    /**
     * Get child component by index
     *
     * @param {number} itemIndex The index of the child component
     */
    Container.prototype.getComponent = function (itemIndex) {
        Assert.notNull(itemIndex, "itemIndex");
        if (itemIndex < 0 || itemIndex >= this.getChildren().size()) {
            Log.error("Item index out of range", itemIndex);
            return null;
        }
        return this.getChildren().get(itemIndex);
    };
    return Container;
})(Component);
//# sourceMappingURL=Container.js.map