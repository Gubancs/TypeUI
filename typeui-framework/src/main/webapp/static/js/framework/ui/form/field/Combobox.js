var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * @author Gabor Kokeny
 */
var Combobox = (function (_super) {
    __extends(Combobox, _super);
    function Combobox(form) {
        _super.call(this, form);
        this.options = new List();
        this.setClass(Combobox.DEFAULT_CLASS);
        this.getContainer().setClass(Combobox.DEFAULT_WRAPPER_CLASS);
        this.setTriggerIconClass("fa fa-angle-down");
    }
    Combobox.prototype.render = function () {
        var _this = this;
        var htmlSelectelement = ElementFactory.createSelect();
        if (this.dataProvider != null) {
            this.dataProvider.forEach(function (data) {
                var option = new ComboboxOption(_this.getContainer());
                if (_this.labelProvider) {
                    option.setLabel(_this.labelProvider.getLabel(data));
                }
                else {
                    option.setLabel(data.toString());
                }
                option.setValue(_this.dataProvider.getValue(data));
                _this.options.add(option);
            });
        }
        _super.prototype.doRender.call(this, htmlSelectelement);
    };
    Combobox.prototype.setDataProvider = function (dataProvider) {
        this.dataProvider = dataProvider;
    };
    Combobox.prototype.setLabelProvider = function (labelProvider) {
        this.labelProvider = labelProvider;
    };
    Combobox.DEFAULT_CLASS = "ui-combobox";
    Combobox.DEFAULT_WRAPPER_CLASS = "ui-combobox-wrapper";
    return Combobox;
})(TriggerField);
var ComboboxOption = (function (_super) {
    __extends(ComboboxOption, _super);
    function ComboboxOption(combobox) {
        _super.call(this, combobox);
        this.addClass("ui-option");
    }
    ComboboxOption.prototype.render = function () {
        var htmlOptionElement = ElementFactory.createOption();
        htmlOptionElement.text = this.getLabel();
        htmlOptionElement.label = this.getLabel();
        if (this.getValue()) {
            htmlOptionElement.value = this.getValue();
        }
        _super.prototype.doRender.call(this, htmlOptionElement);
    };
    ComboboxOption.prototype.setLabel = function (label) {
        this.label = label;
    };
    ComboboxOption.prototype.getLabel = function () {
        return this.label;
    };
    ComboboxOption.prototype.getValue = function () {
        return this.value;
    };
    ComboboxOption.prototype.setValue = function (value) {
        this.value = value;
    };
    return ComboboxOption;
})(Component);
//# sourceMappingURL=Combobox.js.map