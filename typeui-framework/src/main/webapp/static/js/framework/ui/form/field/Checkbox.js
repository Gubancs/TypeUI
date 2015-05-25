var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * @author Gabor Kokeny
 */
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(form) {
        _super.call(this, form, 3 /* CHECKBOX */, true);
        this.addClass(Checkbox.DEFAULT_CLASS);
        this.getContainer().addClass(Checkbox.DEFAULT_WRAPPER_CLASS);
    }
    Checkbox.prototype.render = function () {
        _super.prototype.render.call(this);
        this.label = new Label(this.getContainer());
        this.label.setText(this.getText());
        this.label.setHtmlFor(this);
        this.label.setClass(Checkbox.DEFAULT_LABEL_CLASS);
        this.label.render();
    };
    Checkbox.prototype.setText = function (text) {
        if (this.isRendered()) {
            this.label.setText(text);
        }
        this.text = text;
    };
    Checkbox.prototype.getText = function () {
        return this.text;
    };
    Checkbox.DEFAULT_CLASS = "ui-checkbox";
    Checkbox.DEFAULT_WRAPPER_CLASS = "ui-checkbox-wrapper";
    Checkbox.DEFAULT_LABEL_CLASS = "ui-checkbox-label";
    return Checkbox;
})(InputField);
//# sourceMappingURL=Checkbox.js.map