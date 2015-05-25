var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Base class for form elements
 *
 * Sub classes
 *
 * @author Gabor Kokeny
 *
 */
var Field = (function (_super) {
    __extends(Field, _super);
    function Field(form, useWrapperContainer) {
        _super.call(this, form, useWrapperContainer);
        var c = useWrapperContainer ? this.getContainer() : this;
        this.fieldWrapper = new Container(form);
        this.fieldWrapper.addClass("ui-formfield");
        this.fieldLabel = new Label(this.fieldWrapper);
        c.setParent(this.fieldWrapper);
        this.fieldLabel.setHtmlFor(this);
    }
    Field.prototype.doRender = function (htmlElement) {
        _super.prototype.doRender.call(this, htmlElement);
        CssHelper.setWidth(this.fieldLabel.getElement(), Field.getForm(this.getContainer()).getLabelWidth());
    };
    Field.getForm = function (component) {
        if (component instanceof Form) {
            return component;
        }
        return this.getForm(component.getContainer());
    };
    Field.prototype.setFieldLabel = function (fieldLabel) {
        this.fieldLabel.setText(fieldLabel);
    };
    Field.prototype.destroy = function () {
        this.fieldWrapper.destroy();
        _super.prototype.destroy.call(this);
    };
    return Field;
})(Component);
//# sourceMappingURL=Field.js.map