var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(container) {
        _super.call(this, container);
        this.addClass("ui-label");
    }
    Label.prototype.setText = function (text) {
        if (this.isRendered()) {
            this.getElement().textContent = this.getText();
        }
        this.text = text;
    };
    Label.prototype.getText = function () {
        return this.text;
    };
    Label.prototype.render = function () {
        var element = ElementFactory.createLabel();
        _super.prototype.doRender.call(this, element);
        if (this.htmlFor) {
            element.htmlFor = this.htmlFor.getId();
        }
        element.textContent = this.getText();
    };
    Label.prototype.setHtmlFor = function (htmlFor) {
        this.htmlFor = htmlFor;
    };
    return Label;
})(Component);
//# sourceMappingURL=Label.js.map