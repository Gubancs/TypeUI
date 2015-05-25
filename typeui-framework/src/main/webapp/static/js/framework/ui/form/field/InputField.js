var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var InputType;
(function (InputType) {
    InputType[InputType["TEXT"] = 0] = "TEXT";
    InputType[InputType["HIDDEN"] = 1] = "HIDDEN";
    InputType[InputType["PASSWORD"] = 2] = "PASSWORD";
    InputType[InputType["CHECKBOX"] = 3] = "CHECKBOX";
    InputType[InputType["RADIO"] = 4] = "RADIO";
    InputType[InputType["DATE"] = 5] = "DATE";
    InputType[InputType["EMAIL"] = 6] = "EMAIL";
})(InputType || (InputType = {}));
/**
 * @author Gabor Kokeny
 */
var InputField = (function (_super) {
    __extends(InputField, _super);
    function InputField(form, type, useWrapperContainer) {
        _super.call(this, form, useWrapperContainer);
        this.type = type;
        this.value = null;
        this.autoCompleteEnabled = false;
    }
    /**
     * Set value to this inputField
     *
     * @param {string} value
     */
    InputField.prototype.setValue = function (value) {
        if (this.isRendered()) {
            this.getElement().value = value;
        }
        this.value = value;
    };
    /**
     * Get the value of this inputField
     *
     * @return {stirng}
     */
    InputField.prototype.getValue = function () {
        return this.value;
    };
    InputField.prototype.setName = function (name) {
        if (this.isRendered()) {
            this.getElement().name = name;
        }
        this.name = name;
    };
    InputField.prototype.getName = function () {
        return this.name;
    };
    InputField.prototype.getType = function () {
        return this.type;
    };
    InputField.prototype.setPlaceholder = function (placeholder) {
        if (this.isRendered()) {
            this.getElement().placeholder = placeholder;
        }
        this.placeholder = placeholder;
    };
    InputField.prototype.getPlaceholder = function () {
        return this.placeholder;
    };
    InputField.prototype.setAutoCompleteEnabled = function (autoCompleteEnabled) {
        if (this.isRendered()) {
            this.getElement().placeholder = autoCompleteEnabled ? "on" : "off";
        }
        this.autoCompleteEnabled = autoCompleteEnabled;
    };
    InputField.prototype.isAutoCompleteEnabled = function () {
        return this.autoCompleteEnabled;
    };
    InputField.prototype.render = function () {
        var inputElement = ElementFactory.createInput();
        inputElement.type = InputType[this.getType()].toLowerCase();
        if (this.getName())
            inputElement.name = this.getName();
        if (this.getValue)
            inputElement.value = this.getValue();
        if (this.getPlaceholder())
            inputElement.placeholder = this.getPlaceholder();
        if (this.isReadOnly())
            inputElement.readOnly = this.isReadOnly();
        inputElement.autocomplete = this.isAutoCompleteEnabled() ? "on" : "off";
        _super.prototype.doRender.call(this, inputElement);
    };
    /**
     * Add changelistener
     *
     * @param {EventListener} listener
     */
    InputField.prototype.addChangeListener = function (listener) {
        _super.prototype.on.call(this, InputField.EVENT_CHANGE, listener);
    };
    /**
     * Add focus lost listener to this field
     *
     * @param {EventListener} listener
     */
    InputField.prototype.addBlurListener = function (listener) {
        _super.prototype.on.call(this, InputField.EVENT_BLUR, listener);
    };
    InputField.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    InputField.prototype.setReadOnly = function (readOnly) {
        if (this.isRendered()) {
            this.getElement().readOnly = this.isReadOnly();
        }
        this.readOnly = readOnly;
    };
    InputField.prototype.isReadOnly = function () {
        return this.readOnly;
    };
    InputField.EVENT_CHANGE = "change";
    InputField.EVENT_BLUR = "blur";
    return InputField;
})(Field);
//# sourceMappingURL=InputField.js.map