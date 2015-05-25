var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * @author Gabor Kokeny
 */
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(form) {
        _super.call(this, form);
        this.setType(InputType.RADIO);
    }
    RadioButton.DEFAULT_CLASS = "ui-radio";
    RadioButton.DEFAULT_WRAPPER_CLASS = "ui-radio-wrapper";
    RadioButton.DEFAULT_LABEL_CLASS = "ui-radio-label";
    return RadioButton;
})(Checkbox);
//# sourceMappingURL=RadioButton.js.map